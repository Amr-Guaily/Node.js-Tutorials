const crypto = require('node:crypto');

// Experiment3 inference:
/**
 * libuv's thread pool has 4 thread:
 *  # when we execute the `pbkdf2` five times => the first 4 each take their own thread and complete in nearly the same time.
 *  # The fifth call has to wait for a thread to be free - when a hash from four has complete:
 *  # The hash 5 runs on that thrad and finishes in twice the amount of time.
 * 
 * Can we increase the number of threads in thread pool!?
 */
const MAX_CALLS = 5;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "slat", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}