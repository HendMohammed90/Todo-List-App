import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import "./Todo.css"

const Todo = ({id , text, completed, isEditing ,toggleComplete}) => {
  return (
    <div className='Todo'>
      <p className={completed ? 'completed' : 'incompleted'} onClick={()=> toggleComplete(id)}>{text}</p> 
      <div><FontAwesomeIcon className='delete-icon' icon={faTrash} style={{marginRight:"1rem"}}/>
      <FontAwesomeIcon className='edit-icon'  icon={faPen} /></div>
    </div>
  )
}

export default Todo
