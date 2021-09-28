const fs = require("fs");
const { parse } = require("path");
const userData = JSON.parse(fs.readFileSync("data/users.json", "utf8"));
const todoData = JSON.parse(fs.readFileSync("data/todos.json", "utf8"));

//user control is taking care of functionality of specific users

class UserController {
    /**
     * 
     * @returns userData 
     * fuction getUsers returns all users
     */
  getUsers = async () => {
    return new Promise((resolve, _) => resolve(userData));
  };

  /**
   * 
   * @param {*} id 
   * @returns usersTodos 
   * function get userTodos return all todos attributed
   * to a specific user
   */

  getUsersTodos = async (id) => {
    const user = userData.find((user) => parseInt(id) === user.id);
    if (!user) {
      reject("No User Found");
    } else if (user.todos.length < 1) {
      reject("This user has no todos");
    } else {
      const usersTodos = [];
      for (let i = 0; i < todoData.length; i++) {
        for (let j = 0; j < user.todos.length; j++) {
          if (user.todos[j] === todoData[i].id) {
            usersTodos.push(todoData[i]);
          }
        }
      }
      return new Promise((resolve, reject) => resolve(usersTodos));
    }
  };
}

module.exports = UserController;
