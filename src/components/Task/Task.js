import React from "react";
import "./Task.css";
import trashIcon from "../../images/trash-icon.svg";

const Task = ({ task, toggleTaskCompletion, removeTask }) => {
  return (
    <div className="Task">
      <div className="checkBoxAndTitleContainer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span className={task.completed ? "completed" : ""}>{task.title}</span>
      </div>
      <img
        className="deleteButton"
        onClick={() => removeTask(task.id)}
        src={trashIcon}
      />
    </div>
  );
};

export default Task;
