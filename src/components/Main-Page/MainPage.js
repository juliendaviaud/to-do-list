import React from 'react';
import "./MainPage.css";
import ToDoListContainer from '../ToDoListContainer/ToDoListContainer';

const MainPage = () => {
  return (
	<div className='mainPage'>
		<ToDoListContainer/>
	</div>
  )
}

export default MainPage