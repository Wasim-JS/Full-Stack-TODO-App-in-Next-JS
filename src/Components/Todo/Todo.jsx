import React from 'react'
import { useRouter } from "next/navigation"


const Todo = ({data,deleteTodo,id}) => {
    let router = useRouter()
  return (
    <div className='todoItem'>

        <div>
        {data}
        </div>
        <div>
            <button onClick={()=>router.replace(`/contact/${id}`)}>EDIT</button>
            <button onClick={()=>deleteTodo(id)}>DELETE</button>
        </div>
       
    </div>
  )
}

export default Todo