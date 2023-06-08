import React, { useState } from "react";
import { TodoItem } from "./TodoModel";

const TodoList = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])

    const addTodo = (text: string) => {
        const newTodo = { id: todos.length + 1, text, completed: false }
        setTodos([...todos, newTodo])
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
            <form onSubmit={e => {
                e.preventDefault()
                const todo = e.target.todo.value
                addTodo(todo);
                ((e.target) as HTMLFormElement).reset()
            }}>
            <input type="text" name="todo" placeholder="Enter a task" />
            <button>Add Task</button>
            </form>
        </div>
    )
}

export default TodoList