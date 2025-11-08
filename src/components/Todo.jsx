import React, { useState, useEffect } from "react";
import "./Todo.css";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(()=>{
    const tempData=localStorage.getItem("todoData")
    if(!tempData) return [];
    return JSON.parse(tempData);
  });
  //handle input field Value
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  // handle task entry in array
  function handleTaskEntry(e) {
    e.preventDefault();
    if (!inputValue) return;
    if (task.some((t) => t.text === inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [
      ...prevTask,
      {
        text: inputValue,
        checked: false,
      },
    ]);
    setInputValue("");
  }
  // task completion function
  const handleTaskComplete = (value) => {
    const updatedTask = task.map((curTask) =>
      curTask.text === value
        ? { ...curTask, checked: !curTask.checked }
        : curTask
    );
    setTask(updatedTask);
  };
   useEffect(()=>{
  localStorage.setItem("todoData",JSON.stringify(task));
  },[task]);
  // task deletion function
  const handleTaskDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.text !== value);
    setTask(updatedTask);
  };
  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>ToDo App</h1>
      </header>
      <section className="todo-entries">
        <form onSubmit={handleTaskEntry}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Task here"
          />
          <button type="Submit" className="add-task">
            Add Task
          </button>
        </form>
      </section>
      <section className="display-enteries">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li
                key={index}
                className={`todo-entry ${curTask.checked ? "checked" : ""}`}
              >
                <span>{curTask.text}</span>
                <button className="check-btn" 
                  onClick={() => handleTaskComplete(curTask.text)}>
                  
                  <FaCheck />
                </button>
                <button className="delete-btn" onClick={() => handleTaskDelete(curTask.text)}>
                  
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
