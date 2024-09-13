const http = require('node:http');

const server = http.createServer((req, res) => {
    const userData = {
        name: "Amr Gamal",
        age: 24,
        email: "amrguaily@gamil.com"
    };
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(userData));
});

server.listen(3000, () => {
    console.log("Server running on port 3000...");
});

// We have an api endpoit (http://localhost:3000/) that returns the userData.