import React from "react";
import { XOctagon } from "react-feather";

const divStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "60%",
  margin: "auto",
  color: "black",
};

const completedDiv = {
  ...divStyles,
  color: "gray",
};

function List({ todos, updateTodo, deleteTodo }) {
  return todos.map((todo) => (
    <div style={todo.completed ? completedDiv : divStyles} key={todo.id}>
      <input
        onChange={() => updateTodo(todo.id)}
        type="checkbox"
        checked={todo.completed}
      />
      <h4 className={todo.completed ? "completed": ""}>{todo.title} </h4>
      <XOctagon onClick={() => deleteTodo(todo.id)} />
    </div>
  ));
}

export default List;
