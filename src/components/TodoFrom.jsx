import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      alert("Todo cannot be empty.");
      return;
    }

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form data-testid="todo-form" onSubmit={handleAddTodo} className="flex">
      <label
        htmlFor="todo-input"
        className="sr-only"
      >
        Write Todo...
      </label>
      <input
        type="text"
        id="todo-input"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
        minLength={1}
        data-testid="todo-input"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;