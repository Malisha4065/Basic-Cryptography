const { createHash } = require('crypto');

// Create a string hash
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

// Compare two hashed passwords
let password = 'hi';
const hash1 = hash(password);
console.log(hash1);

let password2 = 'hello';
const hash2 = hash(password2);
console.log(hash2);