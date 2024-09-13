const fs = require('node:fs');
const zlib = require('node:zlib');

// zlib has a built-in transform stram.

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', { encoding: "utf-8", highWaterMark: 2 });

// we are chaining using pipe - moving from a readable stream => transform stream => writable stream.
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));  