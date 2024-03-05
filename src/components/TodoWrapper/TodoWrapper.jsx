import React, { useState } from 'react'
import "./TodoWrapper.css"
import TodoForm from "../TodoForm/TodoForm"

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

    const ChangeTodoState = (e)=>{
        setTodoState(e.target.value)
    }
    
  return (
    <section className='TodoWrapper'>
        <h1>Welcome To Your Todo List</h1>
        <TodoForm onSubmitTodo={AddToList} todoValue={todoState} onChangeTodo={ChangeTodoState} />
        <ul>
        {Todos.map((data)=>{
            return (<li key={data}>{data}</li>)
        })}
        </ul>
    </section>
  )
}

export default TodoWrapper
