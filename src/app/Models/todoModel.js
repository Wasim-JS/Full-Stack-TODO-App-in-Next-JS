import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todo:{
       type:String,
       require:[true,"todo is requried"]
    }
}
,{timestamps:true})

export const todoModel = mongoose.models.todo || mongoose.model('todo',todoSchema);