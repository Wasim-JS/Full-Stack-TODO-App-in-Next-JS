import { connectDB } from "@/DB/DB"
import {todoModel} from "@/app/Models/todoModel.js"
const { NextResponse } = require("next/server")


;(async function (){

    await connectDB()
    
})()

export async function DELETE(_,{params}){
    // await connectDB()

    try {
        await todoModel.findByIdAndDelete(params.id)
        return NextResponse.json(
            {
                success:true,
                message:"todo deleted successfully..."
            }
        ,{status:200})
    } catch (error) {
        return NextResponse.json({ 
            success:false,
            message:error.message
        })

        
    }
   
}

export async function PUT(req,{params}){
    // await connectDB()

    try {

        const data = await req.json()
        await todoModel.findByIdAndUpdate(params.id,data,{new:true})
        return NextResponse.json(
            {
                success:true,
                message:"todo Updated successfully..."
            }
        ,{status:200})
    } catch (error) {
        return NextResponse.json({ 
            success:false,
            message:error.message
        })

        
    }
   
}

export async function GET(req,{params}){
    // await connectDB()

    try {
        const todo = await todoModel.findById(params.id)
        return NextResponse.json(
            {
                success:true,
                todo
            }
        ,{status:200})
    } catch (error) {
        return NextResponse.json({ 
            success:false,
            message:error.message
        })

        
    }
   
}