"use client";
import React from "react";

async function update(id, isDone) {
  console.log("isDone", isDone);
  try {
    await fetch(`http://localhost:3001/api/todo/update`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ id, isDone }),
    });
  } catch (err) {
    console.log("Err=>", err);
  }
}

function Todo({ todo }) {
  return (
    <>
      <div style={{ display: "flex", margin: "0.5rem" }}>
        <input
          type="checkbox"
          onChange={(e) => update(todo.id, e.target.checked)}
          style={{ margin: "0.5rem" }}
        />
        <span style={{ margin: "0.5rem" }}>{todo.name}</span>
        <button style={{ margin: "0.5rem" }}>Delete</button>
      </div>
    </>
  );
}

export default Todo;
