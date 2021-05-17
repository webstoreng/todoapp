import React, { useState,useEffect} from 'react'
import Todoitems from './Components/Todoitems'
import Form from './Components/Form'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App(){

    const[input, setInput] = useState('')
    // the todos hold all our input
    const[todos, setTodos] = useState([])
   //For selecting through it
    const[filter, setFilter] = useState('all')
    //set its on its own state by filtering through the  todos.
    const[filteredTodo, setFilteredTodo] = useState([])

    useEffect(() => {
        handleFilteredtodo()
    }, [todos,filter])
    
    const handleFilteredtodo = ()=>{
        switch (filter) {
            case 'completed':
                setFilteredTodo(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodo(todos.filter(todo => todo.completed === false))
                break;
        
            default:
                setFilteredTodo(todos)
                break;
        }
    }
    return(
       <div className="container">
           <Header/>
           <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} setFilter={setFilter}/>
           <Todoitems todos={todos} setTodos={setTodos} filteredTodo={filteredTodo}/>
           <Footer/>
       </div>

    )
}
export default App