import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import "./Todo.css"

const Todo = ({id , text, completed, toggleDelete ,toggleComplete , toggleEdit}) => {
    const [newText, setNewText] = useState(text);
    const [editing, setEditing] = useState(true)

    const handleEdit = () => {
        toggleEdit(id, newText);
        setEditing(!editing)
    }

    return (
        <div className='Todo'>
            {editing ? (
                <p className={completed ? 'completed' : 'incompleted'} onClick={() => toggleComplete(id)}>{text}</p>
            ) : (
                <input 
                    type="text" 
                    value={newText} 
                    onChange={(e) => setNewText(e.target.value)} 
                    onBlur={handleEdit} 
                />
            )}
            <div>
                <FontAwesomeIcon className='delete-icon' icon={faTrash} style={{marginRight:"1rem"}} onClick={() => toggleDelete(id)} />
                <FontAwesomeIcon className='edit-icon'  icon={faPen} onClick={handleEdit}  />
            </div>
        </div>
    );
}

export default Todo;
