/**
 * Controller.js contains the controller class which will manage
 * the functionality and logic of our apllication
 */
//using fs to read, write, and persist data in data.json file
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data/todos.json", "utf8"));

class TodoController {
  /**
   * async function 'getTodos' will handle returning
   * all todo objects
   */
  getTodos = async () => {
    console.log(data);
    return new Promise((resolve, _) => resolve(data));
  };

  /**
   * async function getTodos takes a single parameter 'id' to find
   * and return a single todo object, if no todo found with matching
   * id promise is rejected with message to user
   */

  getTodo = async (id) => {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (!todo) {
        reject(`No todo found with id ${id} to be found.`);
      }
      resolve(todo);
    });
  };

  /**
   * async function getCompletedTodos iterates over the array of data
   * to retrieve todos with the property of completed set to `true` which are
   * then returned as a new data array
   */

  getCompletedTodos = async () => {
    return new Promise((resolve, reject) => {
      const completedTodos = [];
      data.map((todo) => {
        if (todo.completed === true) {
          completedTodos.push(todo);
        }
      });
      if (completedTodos.length <= 0) {
        reject(`No todo found to have been completed.`);
      }
      resolve(completedTodos);
    });
  };
  /**
   * async function createTodo is takeing a single parameter
   * 'todoData' to which is appended with an id to generate
   * a new todo object
   */

  createTodo = async (todoData) => {
    return new Promise((resolve, _) => {
      let newTodo = {
        id: Math.floor(Math.random() + Math.random() * 100 + 10),
        ...todoData
      };
      data.push(newTodo);
      fs.writeFile("data/todos.json", JSON.stringify(data), (err) => {
        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
      });

      resolve(newTodo);
    });
  };

  /**
   * async function updateTodoStatus takes one parameter 'id'
   * which then updates the completion status and returns the todo
   */

  updateTodoStatus = async (id) => {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (!todo) {
        reject(`No todo found with id ${id} to be updated.`);
      }
      if (todo.completed === true) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
      fs.writeFile("data/todos.json", JSON.stringify(data), (err) => {
        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
      });
      resolve(todo);
    });
  };

  /**
   * async function deleteTodo will take a single parameter 'id'
   * to locate a todo then remove it from the list of todos
   */

  deleteTodo = async (id) => {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (!todo) {
        reject(`No todo found with id ${id} to be deleted.`);
      }
      for (let i = 0; data.length > i; i++) {
        if (data[i].id === parseInt(id)) {
          data.splice(i, 1);
        }
      }
      fs.writeFile("data/todos.json", JSON.stringify(data), (err) => {
        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
      });
      resolve("Todo deleted successfully");
    });
  };
}

module.exports = TodoController;
