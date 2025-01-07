import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  {
    /*function to Add Task */
  }

  const addTask = () => {
    if (inputValue.trim() === '') return;

    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? inputValue : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, inputValue]);
    }
    setInputValue('');
  };

  {
    /*function to delete Task */
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  {
    /*function to edit task */
  }

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="Add-btn" onClick={addTask}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
