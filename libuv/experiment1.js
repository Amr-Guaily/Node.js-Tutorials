const crypto = require('node:crypto');

// Expermiment 1 inference:
// # Every method in node.js that has 'sync' suffix always runs on the main thread and is blocking.
const start = Date.now();
crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);