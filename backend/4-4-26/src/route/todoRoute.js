import express from "express"
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../controller/todoController.js"

const todoRoute = express.Router()

todoRoute.post('/create', createTodo) // api = function + url
todoRoute.get('/getAll', getAllTodo)
todoRoute.delete('/delTodo/:id', deleteTodo)
todoRoute.put('/updateTodo/:id', updateTodo)

export default todoRoute

