const http = require("http");

const server = http.createServer((request, response) => {
    response.write("Hello World from Node.JS! ");
    response.end();    
});

server.listen(5555);