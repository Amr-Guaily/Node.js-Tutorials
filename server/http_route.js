const http = require('node:http');

const server = http.createServer((req, res) => {
    // Map request to the approprite response..
    // Compination of (req.url & req.method) can help you handle any type of routing.
    // I nreal world app, we relay on a framework for Node.js to handle all of this for you!?
    // # There are frameworks to build apps without having to relay on the HTTP module in node.js (such as: express, nest, hapi, koa and sails)
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page...");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About page");
    } else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            name: "Amr Guaily",
            age: 24,
            email: "amrguaily@gmail.com"
        }));
    } else {
        res.writeHead(404);
        res.end("Page not found...");
    }
});

server.listen(3000, () => {
    console.log("Running server on port 3000");
});