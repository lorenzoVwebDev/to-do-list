import React from 'react';
import { createUseStyles }from 'react-jss';
import PropTypes from 'prop-types';
//

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
      <p>{task.text}</p>
      <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <button onClick={() => deleteTask(task.id)}>
        <span>X</span>
      </button>
      </div>
    </div>
  )
};

export default TodoItem;

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired
}