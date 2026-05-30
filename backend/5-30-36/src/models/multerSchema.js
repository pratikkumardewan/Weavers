import mongoose from "mongoose";

const multerSchema = new mongoose.Schema({
    picture: "String"
}, {timestamps:true})

export default mongoose.model("picture", multerSchema)
