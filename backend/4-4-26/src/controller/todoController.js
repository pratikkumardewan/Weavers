import todoSchema from "../model/todoSchema.js"

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const todo = await todoSchema.create({ title })
        return res.status(201).json({
            success: true,
            message: "Todo created",
            data: todo

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not created"

        })

    }
}

export const getAllTodo = async (req, res) => {
    try {
        const todo = await todoSchema.find({})
        return res.status(200).json({
            success: true,
            message: "Todo fetched",
            data: todo

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not fetched"

        })

    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const todo = await todoSchema.findByIdAndDelete({ _id: todoId })
        if (todo) {
            return res.status(200).json({
                success: true,
                message: "Todo deleted",
                data: todo

            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: "Todo not found"

            })

        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message

        })
    }
}


export const updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const { title } = req.body
        const todo = await todoSchema.findOne({ _id: todoId })
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }
        todo.title = title
        await todo.save()
        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: todo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}