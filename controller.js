/**
 * Controller.js contains the controller class which will manage
 * the functionality and logic of our apllication
 */

const { resolve } = require("path/posix");
const data = require("./data.js");

class Controller {
    /**
     * async function 'getTodos' will handle returning
     * all todo objects
     */
    getTodos = async() => {
        return new Promise((resolve, _) => resolve(data));
    };

    /**
     * async function getTodos takes a single parameter 'id' to find
     * and return a single todo object, if no todo found with matching
     * id promise is rejected with message to user
     */

    getTodo = async(id) => {

        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo found with id ${id} to be found.`);
            }
            resolve(todo);
        });
    };
    /**
     * async function createTodo is takeing a single parameter
     * 'todoData' to which is appended with an id to generate
     * a new todo object
     */

    createTodo = async(todoData) => {
        return new Promise((resolve, _) => {
            let newTodo = {
                id: Math.floor(Math.random() + Math.random() * 100 + 10),
                ...todoData
            };
            resolve(newTodo);
        });
    };

    /**
     * async function updateTodoStatus takes one parameter 'id'
     * which then updates the completion status and returns the todo
     */

    updateTodoStatus = async(id) => {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo found with id ${id} to be updated.`);
            }
            todo.completed = true;
            resolve(todo);
        });
    };

    /**
     * async function deleteTodo will take a single parameter 'id'
     * to locate a todo then remove it from the list of todos
     */

    deleteTodo = async(id) => {

        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo found with id ${id} to be deleted.`);
            }
            resolve("Todo deleted successfully");
        });
    };
}

module.exports = Controller;