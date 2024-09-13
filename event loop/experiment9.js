setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
    console.log("this is setImmediate 2");
    process.nextTick(() => console.log("this is process.nextTick 1"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));

// Experiment9 inference:
// Microtask queues callbacks are executed in between check queue callbacks.