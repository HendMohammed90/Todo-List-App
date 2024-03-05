import React, { useState } from 'react'
import "./TodoWrapper.css"
import TodoForm from "../TodoForm/TodoForm"
import { v4 as uuidv4 } from 'uuid'
import Todo from '../Todo/Todo'

const TodoWrapper = () => {
    // const initialTodos = ['Buy groceries', 'Do laundry', 'Study for exam', 'Call mom'];
    const [Todos ,setTodos] = useState([]);
    const [todoState , setTodoState] = useState('')
    const AddToList = (e)=>{
        e.preventDefault(); // Prevent form submission

        if(todoState !== ''){
            const  newTaskID = uuidv4(); 
            let newList = [...Todos, {id: newTaskID, text: todoState, completed: false , isEditing: false }];
            setTodos(newList)
            setTodoState('')
        }else{
            alert("Please enter a task!")
        }
    };

    const ChangeTodoState = (e)=>{
        setTodoState(e.target.value)
    }

    const handelToggleComplete = (id) =>{
        const item = Todos.find((data)=> data.id === id)
        const updatedItem = { ...item ,completed : !item.completed}
        setTodos(Todos.map((data)=> data.id===updatedItem.id ? updatedItem : data))
    }

    const handelToggleDelete = (id)=>{
        const item = Todos.find((data)=> data.id === id)
        // if(!item.isEditing){
           const removeItem = Todos.filter((data)=> data.id !== item.id )
           setTodos(removeItem)
        // }
    }
    

    // const handelToggleEdit = id =>{
    //     const item = Todos.find((data)=> data.id === id)
    //     setTodos(Todos.map((data)=>  
    //      data.id === item.id ? {...data , isEditing : !data.isEditing , Text : todoState}: data
    //      ))
    // }

    const handleToggleEdit = (id, newText) => {
        setTodos(Todos.map((todo) => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing, text: newText } : todo
        ));
    }

  return (
    <section className='TodoWrapper'>
        <h1>Welcome To Your Todo List</h1>
        <TodoForm onSubmitTodo={AddToList} todoValue={todoState} onChangeTodo={ChangeTodoState} />
        {Todos.length > 0 && (
            <ul>
              {Todos.map((data)=>{
            return (<li key={data.text}><Todo id={data.id} text={data.text} completed={data.completed} toggleComplete={handelToggleComplete} toggleDelete={handelToggleDelete} toggleEdit={handleToggleEdit}/></li>)
        })}  
            </ul>
        )}
    </section>
  )
}

export default TodoWrapper
