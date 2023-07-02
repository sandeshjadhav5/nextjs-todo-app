"use client";
import Image from "next/image";
import { useState } from "react";
interface Todo {
  name: String;
  priority: String;
}
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: Todo = { name, priority };
    setTodos([...todos, payload]);
  };
  console.log(todos);
  return (
    <div className="min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl text-center">Todo Application</h1>
      <div className="w-4/12 p-12 m-auto mt-8 border-t-neutral-950 border-solid border-1 bg-violet-300">
        <form onSubmit={addTodo}>
          <label>Write Task Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-11/12 p-2"
          />
          <br />
          <br />
          <label>Select Task Priority</label>
          <br />
          <select
            className="w-11/12 p-2"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input className="w-11/12 mt-8 p-2 bg-violet-400" type="submit" />
        </form>
      </div>
      <div>
        <h1 className="text-center mt-5 text-xl">Todo List</h1>
        <div className="flex justify-center">
          <table className="table-auto w-full max-w-md">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {todos &&
                todos.map((el) => (
                  <tr className="p-2  border-4 border-black-800">
                    <td className="p-2  border-2 border-black-500">
                      {el.name}
                    </td>
                    <td className="p-2  border-2 border-black-500">
                      {el.priority}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
