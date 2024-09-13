const fs = require('node:fs');


fs.readFile(__filename, () => {
    console.log("this is read file 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => { console.log("this is promise.resolve 1"); });

setTimeout(() => console.log("this is setTimeout 1"), 0);

// we still have the timer issue which we saw in the 'experiment4'.
// To make sure we avoid that: add a for loop which do nothing..
// this for loop will ensure that when control enters the timer queue the minimum delay (1ms) has elapsed and the callback is ready to be executed.

for (let i = 0; i < 200000; i++) { }

// Experiment5 inference:
// I/O callbacks are executed after microtask queues callbacks and Timer queue callbacks.
