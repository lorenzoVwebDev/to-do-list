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
    <div className="todo-list">
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
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeHolder="Add text here"
      />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  )

};

export default ToDoList;

