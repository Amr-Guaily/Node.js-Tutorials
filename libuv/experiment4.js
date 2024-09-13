const crypto = require('node:crypto');

// Experiment4 inference:
// By increasing the thread pool size, we are able to improve the total time taken to run multiple calls of async method like pbkdf2.
// Increasing the thread pool size can help with performane but that is limited by the number of available CPU cores. 

// Increase the thread pool size
process.env.UV_THREADPOOL_SIZE = 5;

const MAX_CALLS = 5;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "slat", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}