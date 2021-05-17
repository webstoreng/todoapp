import React from 'react'
import Todo from './Todo'

function Todoitems({todos,setTodos,filteredTodo}) {
    return (
        <div className="todo-items">
            {
                filteredTodo.map(todo => <Todo key={todo.id} id={todo.id} todo={todo} todos={todos} setTodos={setTodos}/> )
            }
           
        </div>
    )
}

export default Todoitems
