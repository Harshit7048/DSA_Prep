import React from "react";
import { useState } from "react";

function App() {
  let initailId = 3;
  const handleDelete = function (id) {
    console.log(id);
    if (id) {
      const ariaLabel = id.getAttribute("aria-label");
      console.log("Deleting parent with aria-label:", ariaLabel);
      // Your delete logic here
      let taskContainer = document.querySelector('[aria-label="task-holder"]');
      taskContainer.removeChild(id);
    }
  };

  const handleSubmit = function () {
    const input = document.querySelector("[aria-label=data-input]");
    console.log(input.value);

    let newTask = ` <li aria-label="new-task-${initailId + 1}">
          <span>${input.value}</span>
          <button>Delete</button>
        </li>`;

    let taskContainer = document.querySelector("[aria-label=task-holder]");

    taskContainer.innerHTML += newTask;

    taskContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete-btn")) {
        const li = e.target.closest('[aria-label^="new-task-"]');
        handleDelete(li);
      }
    });

    initailId + 1;
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          aria-label='data-input'
          type='text'
          placeholder='Add your task'
        />
        <div>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
      <ul aria-label='task-holder'>
        <li aria-label='new-task-1'>
          <span>Walk the dog</span>
          <button
            onClick={(e) => {
              let parent = e.target.closest('[aria-label^="new-task-"]');
              handleDelete(parent);
            }}
          >
            Delete
          </button>
        </li>
        <li aria-label='new-task-2'>
          <span>Water the plants</span>
          <button
            onClick={(e) => {
              let parent = e.target.closest('[aria-label^="new-task-"]');
              handleDelete(parent);
            }}
          >
            Delete
          </button>
        </li>
        <li aria-label='new-task-3'>
          <span>Wash the dishes</span>
          <button
            onClick={(e) => {
              let parent = e.target.closest('[aria-label^="new-task-"]');
              handleDelete(parent);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
