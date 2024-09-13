const https = require('node:https');

// Experiment6 inference:
/**
 * Although both crypto.pbkdf2 and https.request are async, https.request method doesn't seem to use the thread pool.
 * https.request doesn't seem to be affected by the number of CPU cores (average time for 12 requestes is the same as 1 request).
 * 
 * but, WHY?
 *  # https.request is a network I/O operation and not a CPU bound operation (it doesn't use the thread pool).
 *  # Instead Libuv delegates the work to the `operating system kernal` (via system calls).
*/
const MAX_CALLS = 16;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    https.request("https://www.google.com", res => {
        res.on("data", () => { });
        res.on("end", () => {
            console.log(`Request: ${i + 1}`, Date.now() - start);
        });
    }).end();
}