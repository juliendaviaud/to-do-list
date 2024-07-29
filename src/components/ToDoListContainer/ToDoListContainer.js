import React, { useEffect, useState } from "react";
import "./ToDoListContainer.css";
import AddTask from "../addTask/AddTask";
import ToDoList from "../ToDoList/ToDoList";

const ToDoListContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="ToDoListContainer">
      <div className="titleAndListContainer">
        <h1>To do list</h1>
        <ToDoList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      </div>
      <div className="buttonContainer">
        <AddTask addTask={addTask} />
      </div>
    </div>
  );
};

export default ToDoListContainer;
