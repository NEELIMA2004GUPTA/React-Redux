import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, fetchTodos } from "./slice.js";

function App() {
  const [text, setText] = useState("");
  const { items, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>

      {loading && <p>Loading todos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.title || todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
