import mongoose from "mongoose"
import dotenv from 'dotenv/config'

const url =process.env.mongoUrl

export async function dbConnect(){
    try {
        await mongoose.connect(url)
        console.log("Mongo DB connected")
    } catch (error) {
        console.log("Mongo DB not connected", error)
    }
}