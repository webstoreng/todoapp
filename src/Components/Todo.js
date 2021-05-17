import React from 'react'
import {MdCheck, MdDeleteForever} from 'react-icons/md'

function Todo({todo,todos,setTodos,id}) {

    const handleDelete = () =>{
    setTodos(todos.filter(todo=>todo.id !== id))
    }
    const handleCheck = () =>{
    setTodos(todos.map(todo=>{
        if(todo.id === id){
            return{
                ...todo,
                completed: !todo.completed
            }
        }
        return todo
    }))
    }
    return (
        <div className="todo">
             <h5 className={`${todo.completed ? 'completed' : ''}`}>{todo.text}</h5>
             <div className="btn">
             <MdCheck className="check" size="2em" onClick={handleCheck}/>
             <MdDeleteForever className="delete" size="2em" onClick={handleDelete}/>
             </div>
             
            
        </div>
    )
}

export default Todo
