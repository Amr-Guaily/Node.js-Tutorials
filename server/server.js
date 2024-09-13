const http = require('node:http');

// Node will handle the incoming request, and we have to write code to send back the response.

/**
 * We use the createServer method to create a server.
 * Node will automatically inject the (req, res) arguments into the callback function.
 * The req object gives us information about the incoming request (such as URL, headers, etc.).
 * The res object is used to send back a response to the client.
 */
const server = http.createServer((req, res) => {
    // The "Content-Type" header is not mandatory, but it informs the client about the type of data being sent.
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

/**
 * What does a port mean?
 * It's a communication endpoint used to direct network traffic to the correct application or service.
    # You can think of a port as an apartment number in a building;
    # While the building has one address (one IP address), the apartment number (port) tells you exactly where to go within the building.
    # So, when data (network traffic) arrives at a server, the port number determines which application or service should handle that data. 

 * It allows multiple services to run on a single IP address by differentiating them through unique port numbers.
    # A single computer (with one IP address) can run many different services at the same time.
    # Each service can listen on its own port.
    # You could have: 
        @ A web server on port 80 (HTTP)
        @ An email server on port 25 (SMTP)
        @ A database server on port 5432 (PostgreSQL)
 */

/**
 * You are telling Node.js to listen for incoming requests on port 3002.
 * This means that if a client wants to communicate with your Node.js app, they need to:
 *  # Send their request to your server's IP address and include port 3002 in the request.
 * This ensures that the correct application (your Node.js server) handles the request.
 */
server.listen(3002, "192.168.2.40", () => {
    console.log("Server running on port 3002");
});

/**
 * How to allow other computers on the same LAN to communicate with the server you have created?
 *  # Find the server computer's IP Address [192.168.2.40]: 
 *      @ This is the IP address assigned to the computer by the router within your LAN.
 *      @ Other devices on the same network will use this IP address to connect to your server.
 *  
 *  # Specifying an IP Address [server.listen(3002, '192.168.2.40')]:
 *      @ The server will only listen for incoming connections on this specific IP address.
 */
