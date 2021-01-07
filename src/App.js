import { React, useEffect, useState } from "react";
import "./App.css";
import { v1 as uuidv1 } from "uuid";
import Input from "./components/Input";
import List from "./components/List";
import Axios from "axios";
import Loader from "react-loader-spinner";

function App() {
  const [todos, setTodo] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => {
        console.log(response);
        setTodo(response.data);
      })
      .catch((error) => {
        console.log("error in fetching data", error);
      })
      .then(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (input) => {
    const newTodo = {
      id: uuidv1(),
      title: input,
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
      {loader && (
        <div className="full-page">
          <Loader
            type="BallTriangle"
            color="#9b4dca"
            height={100}
            width={100}
          />
        </div>
      )}
      <h1 className="heading">Todo List</h1>
      <Input handleSubmit={handleSubmit} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
