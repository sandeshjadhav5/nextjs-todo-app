import React from "react";
import Todo from "./todo";

const getTodos = async () => {
  let todos = await fetch(`http://localhost:3001/api/todo/list`);
  return todos.json();
};

const TodoList = async () => {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((el) => {
            return (
              <li key={el.id} style={{ padding: "5px 0" }}>
                <Todo todo={el} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
