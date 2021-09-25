const http = require("http");
const Todo = require("./controller.js");
const { getReqData } = require("./utils");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async(req, res) => {
    // checking the request route
    ///api/todos : GET
    if (req.url === "/api/todos" && req.method === "GET") {
        //getting the todos
        const todos = await new Todo().getTodos();
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
            const todo = await new Todo().getTodo(id);
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.end(JSON.stringify(todo));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
        ///api/todos/:id : DELETE
    } else if (
        req.url.match(/\/api\/todos\/([0-9]+)/) &&
        req.match === "DELETE"
    ) {
        try {
            const id = req.url.split("/")[3];
            let message = await new Todo.deleteTodo(id);
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
            let updated_todo = await new Todo().updateTodoStatus(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(updated_todo));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
        ///api/todos/ : POST
    } else if (req.url === "/api/todos" && req.method === "POST") {
        let todo_data = await getReqData(req);
        let todo = await new Todo().createTodo(JSON.parse(todo_data));
        res.writeHead(200, { "Content-Type": "applicatioin/json" });
        res.end(JSON.stringify(todo));
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