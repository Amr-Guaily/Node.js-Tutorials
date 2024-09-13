const fs = require('node:fs');


fs.readFile(__filename, () => {
    console.log("this is read file 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => { console.log("this is promise.resolve 1"); });

setTimeout(() => console.log("this is setTimeout 1"), 0);

setImmediate(() => console.log("This is setImmediate 1"));

for (let i = 0; i < 200000; i++) { }

// Experiment6 inference (tutorial #46[2:00]):
// The output is not what we expected (we expect the I/O queue before the Check queue).
//  # All the 5 statement are executed on the callstack => callbacks been queued up in the apropriate queues.
//  # Except the `readFile` callback is not queued up at the same time!.
//  ## I/O events are polled and callback functions are added to the I/O queue ONLY after the I/O is complete.