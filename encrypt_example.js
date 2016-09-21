var crypto = require('crypto-js');

//var secretMessage = 'I hide the chips under the coach';

var secretMessage = { name: 'Andrew', secretName: '007' };
var secureKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secureKey);

//console.log(encryptedMessage);
console.log("Message = "+encryptedMessage);

var decryptedMessage = crypto.AES.decrypt(encryptedMessage, secureKey);
console.log('Message ='+ JSON.parse(decryptedMessage.toString(crypto.enc.Utf8)));

console.log(JSON.parse(decryptedMessage.toString(crypto.enc.Utf8)));

