import React, { useState } from "react";

export default function NewTodo() {
  const [todos, addTodos] = useState([]);

  const deleteHandle = (id) => {
    addTodos((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: document.querySelector("input").value,
      id: Math.random() * 100,
    };
    addTodos(todos.concat(newTodo));
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" />
        <button
          style={{ margin: "10px", color: "white", backgroundColor: "green" }}
        >
          add
        </button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p
            style={{
              border: "1px solid red",
              boxShadow: "4px 4px 5px rgba(0,0,0,0.05)",
              padding: "10px",
              maxWidth: "200px",
              margin: "20px auto",
              borderRadius: "4px",
              textAlign: "left",
            }}
          >
            <i
              onClick={() => deleteHandle(todo.id)}
              style={{ paddingRight: "10px", cursor: "pointer" }}
              class="fa-solid fa-trash"
            ></i>
            {todo.title}
          </p>
        </div>
      ))}
    </div>
  );
}
