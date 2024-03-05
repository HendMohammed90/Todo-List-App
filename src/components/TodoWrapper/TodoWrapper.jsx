import React, { useState } from 'react'
import "./TodoWrapper.css"
import TodoForm from "../TodoForm/TodoForm"
import { v4 as uuidv4 } from 'uuid'

const TodoWrapper = () => {
    // const initialTodos = ['Buy groceries', 'Do laundry', 'Study for exam', 'Call mom'];
    const [Todos ,setTodos] = useState([]);
    const [todoState , setTodoState] = useState('')
    const AddToList = (e)=>{
        e.preventDefault(); // Prevent form submission

        if(todoState !== ''){
            let newList = [...Todos, {id: uuidv4, text: todoState, completed: false , isEditing: false }];
            setTodos(newList)
            setTodoState('')
            console.log(newList[0].id)
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
            return (<li key={data.text}>{data.text}</li>)
        })}
        </ul>
    </section>
  )
}

export default TodoWrapper
