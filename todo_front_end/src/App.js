import { useState, useEffect } from "react";
import { AppContainer,TodoSection } from "./AppStyles";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/headerComponent/header";
import TodoCard from "./components/todoCardComponent/todoCard";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  //axios api call for todo data
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

  //axios api call for users data
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
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
    fetchUsers();
  }, []);

  const AppContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
  `;

  console.log(todos);
  console.log(users);

  return (
    <AppContainer>
      <Header />
      {loading ? <div>Loading...</div>:<TodoSection>{todos.map((todo) => (
        <TodoCard todo={todo} userObjects={users} />
      ))}</TodoSection>}
    </AppContainer>
  );
};

export default App;
