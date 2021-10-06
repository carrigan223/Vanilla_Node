import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * useTodoData hook is a hook to perform a GET
 * request and retrieve all todo data
 *
 * @returns all todos
 */

const useTodoData = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchTodos = () => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return todos;
};

export default useTodoData;
