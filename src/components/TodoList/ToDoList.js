import React, { useState } from 'react';
import createUseStyles from 'react-jss';
import ToDoItem from '../ToDoItem/ToDoItem.js'


function ToDoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Doctor appointment',
      completed: true
    },
    {
      id: 2,
      text: 'Go visiting mom',
      completed: false
    }
  ]);

  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = {
      id: Date.now(), //built in js function used to create a unique id (total milliseconds from 1970 to now)
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('')
  };

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  };

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      } else {
        return task
      }
    }));
  };

  return (
  <div className="list-container">
    <div className="todo-list">
      <form className="form-input" onSubmit={() => addTask(text)}>
        <div className="input-wrapper">
        <input type="text" min="5" required
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Insert Event Here"
        />
        <div>Enter event here</div>
        </div>
        <button type="submit" className="submit-button">Add Event<div className="tool-tip">Click here to add an event</div></button>
      </form>    
      <div className="items-container">        
      {
        tasks.map(task => {
          return (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
          )
        })
      }
      </div>
    </div>
  </div>
  )

};

export default ToDoList;

