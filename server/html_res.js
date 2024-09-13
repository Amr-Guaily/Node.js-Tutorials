const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    /**
     * Why use readFileSynce instead of readFile? 
     *  # because we have to read all the file content before responding..
     * 
     * But if we have a large html file, you are storing all that content in a temporey buffer,
     * which will lead to unnecessary use of memory!
     *  # we can relay on streams..
     */

    // const html = fs.readFileSync("./index.html");
    // res.end(html);

    // Streams and pipe...
    fs.createReadStream(__dirname + "/index.html").pipe(res);
});

server.listen(3000, () => {
    console.log("Server Running on port 3000");
});