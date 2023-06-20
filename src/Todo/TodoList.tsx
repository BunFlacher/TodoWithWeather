import React from "react";
import TodoItem from "./TodoItem";
import {Todo} from "../types"

const TodoList: React.FC<{ todos: Array<Todo> }> = ({todos}) => {
    return(
        <div>
            {todos.map((todo) => 
            <TodoItem todo={todo} key={todo.id}/>
            )}
        </div>
    )
}

export default TodoList