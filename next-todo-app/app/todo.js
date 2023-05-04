"use client";
import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" onChange={() => {}} />
      {todo.name}
      <button>Delete</button>
    </div>
  );
}

export default Todo;
