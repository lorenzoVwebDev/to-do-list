import React from 'react';
import ToDoList from '../TodoList/ToDoList.js'
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  header: {
    textAlign: 'center',
    fontFamily: "Poppins, serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'gray'
  }
})

function App() {
  const className = useStyle();
  return (
    <div className="App">
      <header>Git repository👉🏻<a href="https://github.com/lorenzoVwebDev/to-do-list">to-do-list</a></header>
      <h1 className={className.header}>To Do List</h1>
      <ToDoList /> 
    </div>
  );
}

export default App;
