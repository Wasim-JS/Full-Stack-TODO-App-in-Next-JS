"use client"

import Loyout from "@/Components/Layout/Loyout"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const EditPage = () => {
  const {id} = useParams()
  const [updatetodo,setUpdatetodo] = useState("")
  const router = useRouter()


  useEffect(()=>{
    getToDoByID()
  },[])


  const getToDoByID = async() =>{
   
    const res = await fetch(`http://localhost:3000/api/hello/${id}`,{
      method:"GET",
          }
        ) 
     const data = await res.json()
     console.log('data is ',data)
     setUpdatetodo(data.todo?.todo)
     //alert(data.message)

  }

 

  const handleUpdate = async(e) =>{

    e.preventDefault()
   
    const res = await fetch(`http://localhost:3000/api/hello/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({todo:updatetodo})

          }
        ) 
     const data = await res.json()
     router.replace('/')
     //alert(data.message)

  }

  return (
  <Loyout>
    <div className="todos">
          <button onClick={()=>router.replace('/')} style={{width:"fit-content",padding:10,border:"none",backgroundColor:"purple",borderRadius:10,color:"white"}}>
            Go Back &lt;
          </button>
            <form onSubmit={handleUpdate}>
            
            <input  type="text" value={updatetodo} onChange={(e)=>setUpdatetodo(e.target.value)} name="" id="" placeholder="Add Your Todos Here..."/>
             <button>Update</button>
            </form>

          </div>
      </Loyout>
  )
}

export default EditPage