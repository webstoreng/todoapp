import React from 'react'
import { MdAdd } from 'react-icons/md'
import {nanoid} from 'nanoid'

function Form({input,setInput,todos,setTodos, setFilter}) {

    //get the inputed text in state
    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    // set the inputed array in state.
    const handleClick = (e) =>{
     e.preventDefault()
     setTodos([...todos, {
         id:nanoid(),
         text:input,
         completed: false
     }])
     setInput('')

    }
    const filterHandler = (e) =>{
        setFilter(e.target.value)
    }
    return (
        <div className="form">
            <form className="input">
                <input type="text" placeholder="Todo here...." 
                className="input-text"
                value={input} 
                onChange={handleChange}/>
                <MdAdd className="add" size="1.5em" onClick={handleClick}/>
            </form>
            <select className="select-me" onChange={filterHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            
        </div>
    )
}

export default Form
