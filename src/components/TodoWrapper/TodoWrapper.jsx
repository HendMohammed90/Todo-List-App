import React, { useState } from 'react'
import "./TodoWrapper.css"

const TodoWrapper = () => {
    const initialTodos = ['Buy groceries', 'Do laundry', 'Study for exam', 'Call mom'];
    const [Todos ,setTodos] = useState(initialTodos);
    const [todoState , setTodoState] = useState('')
    const AddToList = (e)=>{
        e.preventDefault(); // Prevent form submission

        if(todoState !== ''){
            let newList = [...Todos, todoState];
            console.log(newList)
            setTodos(newList)
            setTodoState('')
        }else{
            alert("Please enter a task!")
        }

    };
    
  return (
    <section className='TodoWrapper'>
        <h1>Welcome To Your Todo List</h1>
        <form onSubmit={AddToList}>
            <input type='text' name='todo' value={todoState} placeholder="Enter a task" onChange={(e)=> setTodoState(e.target.value)}/>
            <button type='submit'>Add Task</button>
        </form>
        <ul>
        {Todos.map((data)=>{
            return (<li key={data}>{data}</li>)
        })}
        </ul>
    </section>
  )
}

export default TodoWrapper
