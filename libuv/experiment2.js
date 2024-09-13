const crypto = require('node:crypto');

// Experiment2 inference:
// A few methods like fs.readFile and crypto.pbkdf2 run on a seperate thread in libuv's thread pool.

const MAX_CALLS = 3;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "slat", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}