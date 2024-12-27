import React from 'react';
import { createUseStyles }from 'react-jss';
import propTypes from 'prop-types';
//
import './ToDoItem.css';

/* const useStyles = createUseStyles({
  todoitem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    '& p': {
      color: '#888',
      textDecoration: 'line-through'
    },
    '& button': {
      width: '15px',
      height: '15px',
      fontSize: '8px'
    }
  }
}) */

function TodoItem({ task, deleteTask, toggleCompleted}) {

  function handleChange() {
    toggleCompleted(task.id)
  };
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  )
};

export default TodoItem;
