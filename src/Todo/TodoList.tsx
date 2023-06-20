import React from "react";
import TodoItem from "./TodoItem";
import { TodoModel } from "./TodoModel";

const TodoList: React.FC<{todos: TodoModel[]}> = ({todos}) => {
    console.log(todos)
    return (
        <div>
            {todos.map((todo:TodoModel) =>
                <TodoItem todo={todo} key={todo.id} />
            )}
        </div>
    )
}

export default TodoList