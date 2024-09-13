const fs = require('node:fs');

setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
    console.log("this is read file 1");
});

// Experiment4 inference (tutorial #45):
// When running setTimeout with a delay 0ms and an I/O async method, the order of execution can never be guaranteed.
// Why can the order of execution never be guaranteed?
// # Because of how a minimum delay is set for timers - search: 'Chromium DOMTimer cpp file'  