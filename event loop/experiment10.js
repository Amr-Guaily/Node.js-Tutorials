const fs = require('node:fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
    console.log("this is from readableStream close event Callback");
});

setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));

// Experiment10 inference:
// Close queue callbacks are executed after all another queus callbacks in a given iteration of the event loop.