console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();
//storage.setItemSync('name','Aravindhan D');

//console.log(storage.getItemSync('name'));

//var accounts = [{username: 'user1', balance: 0},{username: 'user2', balance: 1000}];

//storage.setItemSync('accounts', accounts);

storage.removeItemSync('accounts');

var accounts = storage.getItemSync('accounts');
console.log(accounts);

//accounts.push({username: 'user3', balance: '100'});

//storage.setItemSync('accounts', accounts);


