import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        //check if the todo is existing or not 
        const existingTodo = await todoSchema.findOne({
            title: title,
            userId: req.userId,
        });

           if (existingTodo) {
               return res.status(400).json({
                   success: false,
                   message: "Todo with this title already exists!",
               });
           }

        const createdTodo = await todoSchema.create({
            title: title,
            userId: req.userId,
        });

        // console.log(createTodo.userId)

        return res.status(201).json({
            success: true,
            message: "Todo created successfully!",
            data:createdTodo,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

export const getAllTodo = async (req, res) => {
    try {

        const allTodo = await todoSchema.find({
            userId: req.userId,
        });

        return res.status(200).json({
            success: true,
            message: "Todo fetched successfully!",
            data:allTodo,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
}

export const deleteTodo = async (req, res) =>{
    try{
        const todoId = req.params.id
        const delTodo = await todoSchema.findOneAndDelete({
            _id:todoId,
            userId: req.userId
        })

        if(!delTodo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }

        return res.status(200).json({
            success:true,
            message: "Todo Deleted Successfully",
            delTodo
        })
    }catch(error){
        return res.status(500).json({
                success:false,
                message:"Internal server error!"
            })
    }

}

export const updateTodo = async (req, res) =>{
    try{
        const {title} = req.body
        const todoId = req.params.id

    // Check if another todo with the new title already exists for this user
        const existingTodo = await todoSchema.findOne({
                title: title,
                userId: req.userId,
               _id: { $ne: todoId } // Exclude the current todo being updated
           });

           if (existingTodo) {
               return res.status(400).json({
                   success: false,
                   message: "Another todo with this title already exists!",
               });
           }

        const editTodo = await todoSchema.findOne({
            _id:todoId,
            userId: req.userId
        })

        if(!editTodo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }

        editTodo.title = title
        await editTodo.save()
        
        return res.status(200).json({
            success:true,
            message: "Todo Updated Successfully",
            editTodo
        })
    }catch(error){
        return res.status(500).json({
                success:false,
                message:"Internal server error!"
            })
    }

}

//paginated todos
export const paginateTodo = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 3; // 3 todos per page

    // Calculating the skip value
    const skip = (page - 1) * limit;

    // Getting todo with pagination
    const todo = await todoSchema
      .find({ userId: req.userId })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Todos fetched as per query",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};