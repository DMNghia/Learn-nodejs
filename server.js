const http = require('http');

// create hostname and port
const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', "application/json");
    response.end(`{"message": "Hello world"}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})