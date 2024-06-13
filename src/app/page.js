"use client"
import Loyout from "@/Components/Layout/Loyout"
import Loader from "@/Components/Loader/Loader"
import Todo from "@/Components/Todo/Todo"
import { useEffect, useState } from "react"

const page = () => {
 
 const [todo,setTodo] = useState('')
 const [todoData,setTodoData] = useState([])
 const [isLoading,setIsLoading] = useState(true)


async function getTotos(){

  console.log('start')
             const res = await fetch('http://localhost:3000/api/hello',{
              method:"GET"
             }) 
             const data = await res.json()
             setTodoData(data.todos)
             setIsLoading(false)

}

 useEffect(()=>{
  getTotos()


 },[])


  const handleSubmit = async(e) =>{
             e.preventDefault()

             if(todo.trim() === "") return alert('Please write the TODO')
             
             const res = await fetch('http://localhost:3000/api/hello',{
              method:"POST",
              headers:{
                'Content-Type':"application/json"
              },
              body:JSON.stringify({todo:todo.trim()})
             }) 
             const data = await res.json()
             setTodo("")
             setIsLoading(true)
             getTotos()
             
             //alert(data.message)
            
  }

  async function deleteTodo(id){

    const res = await fetch(`http://localhost:3000/api/hello/${id}`,{
      method:"DELETE",
          }) 
     const data = await res.json()
     setIsLoading(true)
     getTotos()
     //alert(data.message)
  }
  return (
      <Loyout>
          <div className="todos">
            <form  onSubmit={handleSubmit}>
            
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" name="" id="" placeholder="Add Your Todos Here..."/>
             <button>Add</button>
            </form>

            {/* todos comes here */}
            
            <div className="todo">


                 {

               isLoading?(  <Loader />):(
                todoData.map(({_id,todo})=>(
                  <Todo key={_id} id={_id} data={todo} deleteTodo={deleteTodo}/>
                ))
               )
                  
                 }
             
            </div>
          </div>
      </Loyout>
  )
}

export default page