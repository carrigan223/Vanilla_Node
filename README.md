# Simple Node.js Rest API

This is a simple node.js API built with vanilla JavaScript without the use of frameworks such as express. The API supports all CRUD operations and can be integrated with a working Data base, for testing purposes data.js will provide example todos to be read from.

---

## Routes Available

- /api/todos `GET` *route to Read ALL todos*
- /api/todos\completed `GET` *route to Read ALL todos which have the completed property set to true*
- /api/todos/:id `GET` *route to Read a SINGLE todo with matching id*
- /api/todos `POST` *route to Post a new todo, expects req body to have data to populate todo object*
- /api/todos/:id `PATCH` *route to Update a todo status(complete: true or false) with matching id*
- /api/todos/:id `DELETE` *route to Delete a todo with matching id*

### req.body example

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
`cd Vanilla_Node.`

3.From the command line run
`npm run dev`

4.Using Postman or Insomnia Route operations can be tested at
`http://localhost:5000/api/todos`

