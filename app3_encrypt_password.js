var crypto = require('crypto-js');

console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();

//account.name Facebook
//account.username User12!
//account.password Password123!
function createAccount(account, masterpassword){
//	var accounts = storage.getItemSync('accounts');

	var accounts = getAccounts(masterpassword);
	accounts.push(account);
	saveAccounts(accounts, masterpassword);
	return account;
}

//account.name Facebook
function getAccount(accountname, masterpassword){
	//var accounts = storage.getItemSync('accounts');

	var accounts = getAccounts(masterpassword);
	var matchedaccount;
	//for(i =0 ;i <accounts.length; i++)
	//{
	//	if(accounts[i].name === accountname)
	//		return accounts[i];		
	//}

	accounts.forEach(function(account){
		if(account.name === accountname){
			matchedaccount = account;
		}	
	});
	
	return matchedaccount;
}

function getAccounts(masterpassword){
	// get item sync
	// decrypt
	// return array

	var encryptedaccounts = storage.getItemSync('accounts');
	var accounts = [];
	if(typeof encryptedaccounts !== 'undefined')
	{
	var bytes = crypto.AES.decrypt(encryptedaccounts, masterpassword);
	accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	return accounts;

}

function saveAccounts(accounts, masterpassword){
	// encrypt accounts
	// set item sync
	// return accounts
	
	var encryptedaccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterpassword);
	storage.setItemSync('accounts', encryptedaccounts.toString());
	return accounts;
}

//createAccount({ 
//	name: 'Facebook',
//	username: 'User01@gmail.com',
//	password: 'user@1234'
//});

//console.log(getAccount('Facebook'));



var argv = require('yargs')
	.command('create','Create an account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Enter your name',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Enter user name',
				type:'string'			
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Enter a password',
				type: 'string'
			},
			masterpassword: {
				demand: true,
				alias: 'm',
				description: 'Enter a master password',
				type: 'string'
			},
		})
		.help('help');
	})
	.command('get','Get an account using user name', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Enter your name',
				type: 'string'
			},
			masterpassword: {
				demand: true,
				alias: 'm',
				description: 'Enter a master password',
				type: 'string'
			},
		})
		.help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];


if(command == 'create')
{
	var newAccount =	createAccount({
	name: argv.name,
	username: argv.username,
	password: argv.password
	}, argv.masterpassword);

console.log('Account Created');
console.log(newAccount);
}
else if(command == 'get')
{
	var account = getAccount(argv.name, argv.masterpassword);
	if(typeof account === 'undefined')
		console.log('Enter a valid username');
	else
		console.log(account);
}
else
{
 console.log('Enter a valid command');
}
