import React from "react";
import "./ToDoList.css";
import Task from "../Task/Task";

const ToDoList = ({ tasks, toggleTaskCompletion, removeTask }) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="TaskList">
      <div className="incompleteTaskListContainer">
        <h2>Incomplete tasks</h2>
        <div className="incompleteTaskList">
          {incompleteTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              removeTask={removeTask}
            />
          ))}
        </div>
      </div>
      <hr className="dividerLine"></hr>
      <div className="completedTaskListContainer">
        <h2>Completed tasks</h2>
        <div className="completedTaskList">
          {completedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              removeTask={removeTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
