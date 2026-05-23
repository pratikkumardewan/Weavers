import userSchema from "../models/userSchema.js"
import bcrypt from "bcrypt"
import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'
import { verifyMail } from "../verificationMail/verifyMail.js"

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
        const token = jwt.sign({ id:user._id }, process.env.secretKey, {
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