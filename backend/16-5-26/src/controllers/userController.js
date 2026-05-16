import userSchema from "../models/userSchema.js"
import bcrypt from "bcrypt"
import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'
import { verifyMail } from "../verificationMail/verifyMail.js"
import sessionSchema from "../models/sessionSchema.js"

export const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const existing = await userSchema.findOne({ email })
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "User already Registered"
            })
        }
        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const user = await userSchema.create({ userName, email, password: hashPassword })
        const token = jwt.sign({ id: user._id }, process.env.secretKey, {
            expiresIn: '5m'
        })
        console.log("token generated", token)
        verifyMail(token, email)

        user.token = token;
        await user.save()
        return res.status(201).json({
            success: true,
            message: "User Registered successfully",
            data: user,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access!!"
            })
        } else {
            const passCheck = await bcrypt.compare(password, user.password)
            if (!passCheck) {
                return res.status(401).json({
                    success: false,
                    message: "Incorrect Password!!"
                })
            } else if (passCheck && user.isVerified) {
                //auto logout at new login
                await sessionSchema.findOneAndDelete({userId: user._id})

                //new login
                await sessionSchema.create({ userId: user._id })

                const accessToken = jwt.sign({ userId: user._id }, process.env.secretKey, {
                    expiresIn: "10days"
                })

                const refreshToken = jwt.sign({ userId: user._id }, process.env.secretKey, {
                    expiresIn: "30days"
                })

                user.isLoggedIn = true;
                await user.save();

                return res.status(200).json({
                    success: true,
                    message: "Hurray",
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    data: user
                })
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Complete verification first"
                })
            }

        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


//user logout
export const logout = async(req , res)=>{
  try {
      const existing = await sessionSchema.findOne({userId:req.userId})
      const user = await userSchema.findById({_id:req.userId})

      //checking if user exists or not
      if(existing){
        await sessionSchema.findOneAndDelete({userId:req.userId})
        user.isLoggedIn = false
        await user.save()
        return res.status(200).json({
          success: true,
          message: "Session Ended Succesfully"
        })
      }else{
        return res.status(404).json({
          success: false,
          message:"No Session Found"
        })
      }

  } catch (error) {
     return res.send(500).json({
      success: false,
      message: error.message,
    });
  }
}