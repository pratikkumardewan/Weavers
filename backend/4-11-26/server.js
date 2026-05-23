import express from 'express'
import dotenv from 'dotenv/config'
import { dbConnect } from './src/config/dbConnect.js'
import userRoute from './src/routes/userRoute.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/user', userRoute)


dbConnect()
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})