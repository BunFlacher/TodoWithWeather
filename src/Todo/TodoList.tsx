import React, { useState } from "react";
import { TodoItem } from "./TodoModel";

const TodoList = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [text, setText] = useState<string>("")

    const addTodo = (text: string) => {
        if(text.trim() === "") return 0
        const newTodo = { id: todos.length + 1, text, completed: false }
        setTodos([...todos, newTodo])
        setText("")
    }
    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleComplete = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="text"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>

            <input type="text"
                name="todo"
                placeholder="Enter a task" value={text}
                onChange={(e) => { setText(e.currentTarget.value) }}
            />
            <button onClick={() => { addTodo(text) }}>Add Task</button>

        </div>
    )
}

export default TodoList