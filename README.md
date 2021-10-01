# Simple Node.js Rest API

This is a simple node.js API built with vanilla JavaScript without the use of frameworks such as express. The API supports all CRUD operations and can be integrated with a working Data base, for testing purposes data.json will provide example todos to be read from and users.json will provide example users.

---

## Routes Available

- /api/todos `GET` *route to Read ALL todos*
- /api/todos\completed `GET` *route to Read ALL todos which have the completed property set to true*
- /api/todos/:todoId `GET` *route to Read a SINGLE todo with matching id*
- /api/todos `POST` *route to Post a new todo, expects req body to have data to populate todo object*
- /api/todos/:todoId `POST` *route to Update a todo status(complete: true or false) with matching id*
- /api/todos/:todoId `DELETE` *route to Delete a todo with matching id*
-/api/users `GET` *Route to retrieve all users*
- /api/users/todos/:userId `Get` *Route to retrieve all todos associted with specific userid*

### req.body example for route /api/todos `POST`

`{
	"title": "Task To Be Completed",
    "description": "Task Description",
    "completed": false
}`

---

## Installation Locally

1.Clone github repository
`gh repo clone carrigan223/Vanilla_Node.`

2.Access parent directory 
`cd Vanilla_Node`

3.From the command line run
`npm install`
`npm run dev`

4.Using Postman or Insomnia Route operations can be tested at
`http://localhost:5000/api/todos`

## For Usage with built in front end

1.With back end application started move into front end directory
`cd todo_front_end`

2.Install Dependencies
`yarn install`

3.After installing dependencies and with back end started from the command line run
`yarn start`

4.Application should now be running on local server displaying data provided from Node API



