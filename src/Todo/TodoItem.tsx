import React, { FC } from "react";
import { TodoModel } from "./TodoModel";

const TodoItem: FC<{ todo: TodoModel }> = ({ todo }) => {
    return (
        <div className="todo">
            <div className="todo__item">
                <div>{todo.title} {todo.last}</div>
            </div>
        </div>
    )
}

export default TodoItem