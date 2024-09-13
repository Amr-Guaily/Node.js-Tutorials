setTimeout(() => console.log("this is the setTimeout 1"), 0);
setTimeout(() => console.log("This is the setTimeout 2"), 0);
setTimeout(() => console.log("This is the setTimeout 2"), 0);

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
// Callbacks in the microtask queue are executed before callbacks in the timer queue.