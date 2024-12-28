import React from 'react';
import ToDoList from '../TodoList/ToDoList.js'
import { createUseStyles } from 'react-jss';
/* 
const useStyle = createUseStyles({
  header: {
    textAlign: 'center',
    fontFamily: "Poppins, serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'gray',
    fontSize: '2vw'
  }
}) */

function App() {
/*   const className = useStyle(); */
  return (
    <div className="App">
      <header>Git repository 👉🏻<div><a href="https://github.com/lorenzoVwebDev/to-do-list">to-do-list</a></div></header>
      <h1 className="header-0-2-4">To Do List</h1>
      <ToDoList /> 
    </div>
  );
}

export default App;
