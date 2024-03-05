import React from 'react'
import "./TodoForm.css"

const TodoForm = ({onSubmitTodo , todoValue, onChangeTodo}) => {
  return (
    <form className='TodoForm' onSubmit={onSubmitTodo}>
    <input className='todo-input' type='text' name='todo' value={todoValue} placeholder="Enter a task" onChange={(e)=> onChangeTodo(e)}/>
    <button type='submit' className='todo-btn'>Add Task</button>
</form>
  )
}

export default TodoForm
