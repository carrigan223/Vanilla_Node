const http = require("http");
const TodoController = require("./controllers/todoController");
const UserController = require("./controllers/userController");

const { getReqData } = require("./utils");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  // checking the request route
  ///api/users : GET route to retrieve all users
  if (req.url === "/api/users" && req.method === "GET") {
    const users = await new UserController().getUsers();
    //setting response header
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
  ///api/user/todos/:id : GET route to retrieve a specific users functions
  else if (
    req.url.match(/\/api\/user\/todos\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[4];
    const usersTodos = await new UserController().getUsersTodos(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(usersTodos));
  }
  ///api/todos : GET
  else if (req.url === "/api/todos" && req.method === "GET") {
    //getting the todos
    const todos = await new TodoController().getTodos();
    //setting the response header
    res.writeHead(200, { "Content-Type": "application/json" });
    //send the data
    res.end(JSON.stringify(todos));
  }

  //if url matches to api/todos/{id} and the method is GET we will return a single todo
  ///api/todos/:id : GET
  else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET") {
    try {
      //grabing id from url after third slash
      const id = req.url.split("/")[3];
      const todo = await new TodoController().getTodo(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
    ///api/todos/:id : DELETE
  } else if (
    req.url.match(/\/api\/todos\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    try {
      const id = req.url.split("/")[3];
      let message = await new TodoController().deleteTodo(id);
      res.writeHead(200, { "content-Type": "apllication/json" });
      res.end(JSON.stringify({ message }));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
    ///api/todos/:id : UPDATE
  } else if (
    req.url.match(/\/api\/todos\/([0-9]+)/) &&
    req.method === "PATCH"
  ) {
    try {
      const id = req.url.split("/")[3];
      let updated_todo = await new TodoController().updateTodoStatus(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updated_todo));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
    ///api/todos/ : POST
  } else if (req.url === "/api/todos" && req.method === "POST") {
    let todo_data = await getReqData(req);
    let todo = await new TodoController().createTodo(JSON.parse(todo_data));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todo));
  } else if (req.url === "/api/todos/completed" && req.method === "GET") {
    let completed_todos = await new TodoController().getCompletedTodos();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(completed_todos));
  } else {
    //if requested route is NOT present
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

//listening for server
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
