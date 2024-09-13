const fs = require('node:fs');

fs.readFile(__filename, () => {
    console.log("this is read file 1");
    // The reason we do this is to ensure the setImmediate callback is queued up after the I/O polling is complete.
    setImmediate(() => console.log("this is inner setImmediate inside readFile"));

    process.nextTick(() => console.log("this is inner process.nextTick readFile"));
    Promise.resolve().then(() => console.log("this is inner promise.resolve inside readFile"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise.resolve 1"));

setTimeout(() => console.log("this is setTimeout 1"), 0);


for (let i = 0; i < 200000; i++) { }

// Experiment8 inference (tutorial #47):
// Microtask queues callbacks are executed after I/O callbacks and before check queue callbacks.