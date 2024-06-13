import mongoose from "mongoose";

export const connectDB = async() =>{

    try {
        await mongoose.connect('mongodb://localhost:27017/todos')
        console.log('connected to DataBase')
        } catch (error) {
        console.log('Error While connecting to DataBase '+error)
    }

}