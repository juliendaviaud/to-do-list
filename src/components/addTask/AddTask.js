import React, { Fragment, useState } from "react";
import plusIcon from "../../images/plus-icon.svg";
import "./AddTask.css";

const AddTask = ({ addTask }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
      setShowPopup(false);
    }
  };
  return (
    <Fragment>
      <div className="addTaskButton" onClick={() => setShowPopup(true)}>
        <img src={plusIcon} alt="" />
        <p className="addTaskText">Add task</p>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popupFormContainer">
            <div className="newTaskNameContainer">
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Name of the task"
              />
            </div>
            <div className="popupButtons">
              <button
                className="cancelButton"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button className="addButton" onClick={handleAddTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddTask;
