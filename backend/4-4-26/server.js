import express from 'express'
import { dbConnect } from './src/config/dbConnect.js'
import todoRoute from './src/route/todoRoute.js'

const app = express()
const port = 8003

dbConnect()
app.use(express.json())
app.use('/', todoRoute)

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})

//npm init -y
//npm i express mongoose nodemon

//server - DB - server - model(schema) - controller(functions) - route - server
//CRUD
//c - create - post
//r - read - get
//u - update - put / patch
// d - delete - delete