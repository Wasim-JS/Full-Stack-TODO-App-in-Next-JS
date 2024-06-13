import { connectDB } from "@/DB/DB"
import {todoModel} from "@/app/Models/todoModel.js"
const { NextResponse } = require("next/server")

export async function POST(req){
    await connectDB()
    const data = await req.json()
    try {
        await todoModel.create(data)
        return NextResponse.json(
            {
                success:true,
                message:"todo added successfully..."
            }
        ,{status:201})
    } catch (error) {
        return NextResponse.json({ 
            success:false,
            message:error.message
        })

        
    }
   
}
export async function GET(req){
    await connectDB()

    try {
        const todos = await todoModel.find({})
        return NextResponse.json(
            {
                success:true,
                todos
            }
        ,{status:200})
    } catch (error) {
        return NextResponse.json({ 
            success:false,
            message:error.message
        })

        
    }
   
}
