setTimeout(() => console.log("this is the setTimeout 1"), 0);
setTimeout(() => {
    console.log("this is the setTimeout 2");
    process.nextTick(() => console.log("thsi is the inner next tick inside setTimeout"));
}, 0);
setTimeout(() => console.log("This is the setTimeout 3"), 0);

process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("This is process.nextTick 2");
    process.nextTick(() => console.log("this is the inner next tick inside next tick"));
});
process.nextTick(() => console.log("this is process.nextTick 3"));


Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2");
    process.nextTick(() => console.log("this is the inner next tick inside promise"));
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

// Experiment1 inference:
// Callbacks in microtask queue are executed in between the execution of callbacks in the timer queue.
// After every callback execution in the timer queue => the event loop goes back and check the microtask queues.