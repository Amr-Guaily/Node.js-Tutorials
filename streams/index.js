// Streaming a data from one file to another - copying the content of file1 to file2
const fs = require("node:fs");

// fs Module is one of the many modules that uses streams.
// Another example is the http module - http req is the readable stream and the http res is the writable stream.

const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8", highWaterMark: 2 });

const writeableStream = fs.createWriteStream("./file2.txt");

// Streams extends from the event emiiter class..
readableStream.on('data', (chunk) => {
    // The buffer the streams uses has the default size of 64 kb.
    console.log(chunk);
    writeableStream.write(chunk);
});