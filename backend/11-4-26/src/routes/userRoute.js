import express from "express"
import { register } from "../controllers/userController.js"
import { verification } from "../middleware/tokenverify.js"

const userRoute = express.Router()

userRoute.post('/register', register)

userRoute.get("/verify",verification)

export default userRoute