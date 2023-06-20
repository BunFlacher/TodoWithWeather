import React from "react";

const TodoItem = (props) => {
    return (
        <div className="todo">
            <div className="todo__item">
                <div>{props.todo.title} {props.todo.last}</div>
            </div>
        </div>
    )
}

export default TodoItem