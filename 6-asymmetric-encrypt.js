const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./5-keypair');

const message = 'the british are coming!';

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(encryptedData.toString('hex'));

const decryptedMessage = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedMessage.toString('utf-8'));