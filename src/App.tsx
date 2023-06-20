import React, {useState} from 'react';
import { TodoModel } from './Todo/TodoModel';
import TodoList from './Todo/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Work', last: 'yestaday', description: 'none', backgroundColor: 'rgb(75,177,248)'},
    {id: 2, title: 'Work', last: 'yestaday', description: 'none', backgroundColor: 'rgb(83,219,137)'},
    {id: 3, title: 'Work', last: 'yestaday', description: 'none', backgroundColor: 'rgb(249,138,75)'},
    {id: 4, title: 'Work', last: 'yestaday', description: 'none', backgroundColor: 'rgb(255,94,94))'},
    {id: 5, title: 'Work', last: 'yestaday', description: 'none', backgroundColor: 'rgb(131,143,164)'},
    {id: 6, title: 'Work', last: 'yestaday', description: 'none', backgroundColor: 'rgb(99,76,250)'},
  ])
  console.log(todos)

  return(
    <div className='wrapper'>
        <div className='container'>
            <h1 className='goals'>Goals</h1>
            <h3 className="recent">Recent</h3>
            <TodoList />
            <div className="footer">
                <div className="footer_button">
                    <div className="footer_text">+ New Goal</div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default App;
