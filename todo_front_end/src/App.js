import { useState, useEffect } from "react";
import { AppContainer, TodoSection } from "./AppStyles";
import axios from "axios";
import Footer from "./components/footerComponent/footer";
import styled from "styled-components";
import Header from "./components/headerComponent/header";
import TodoCard from "./components/todoCardComponent/todoCard";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
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

  /**
   *
   * @param {date in milliseconds} msDate
   * dateSetAndFormat takes in a a value of the
   * date in milliseconds to convert to a month year day
   * format
   */
  const dateSetAndFormat = (msDate) => {
    const convertedDate = new Date(msDate);
    const stringDate = convertedDate.toString();
    setDate(stringDate.substr(0, 15));
  };

  useEffect(() => {
    fetchTodos();
    fetchUsers();
    dateSetAndFormat(Date.now());
  }, []);

  console.log(todos);
  console.log(date);

  return (
    <AppContainer>
      <Header date={date} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <TodoSection onClick={() => fetchTodos()}>
          {todos.map((todo) => (
            <TodoCard todo={todo} userObjects={users} key={todo.id} />
          ))}
        </TodoSection>
      )}
      <Footer />
    </AppContainer>
  );
};

export default App;
