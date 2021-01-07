import { React, useState } from "react";
import "./App.css";
import { v1 as uuidv1 } from "uuid";
import Input from "./components/Input";
import List from "./components/List";

const initial = [
  {
    id: uuidv1(),
    text: "first",
    completed: true,
  },
  {
    id: uuidv1(),
    text: "second",
    completed: false,
  },
];
function App() {
  const [todos, setTodo] = useState(initial);

  const handleSubmit = (input) => {
    const newTodo = {
      id: uuidv1(),
      text: input,
      completed: false,
    };

    setTodo([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    setTodo(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  return (
    <div className="App container">
      <h1>Todo List</h1>
      <Input handleSubmit={handleSubmit} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
