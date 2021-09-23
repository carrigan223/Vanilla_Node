const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async(req, res) => {
    // checking the request route
    if (req.url === "/api" && req.method === "GET") {
        //setting the response header
        res.writeHead(200, { "Content-Type": "application/json" });
        //setting the response
        res.write("Hi, This is a Vanilla Node.js API");
        //end the response
        res.end();
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