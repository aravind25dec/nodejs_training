console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();

//account.name Facebook
//account.username User12!
//account.password Password123!
function createAccount(account){
	var accounts = storage.getItemSync('accounts');

	//If accounts is undefined (typeof) set accounts to []
	if(typeof accounts === 'undefined')
	{
		accounts = [];
	}
	
	accounts.push(account);
	storage.setItemSync('accounts', accounts);
	return account;
}

//account.name Facebook
function getAccount(accountname){
	var accounts = storage.getItemSync('accounts');
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
			}
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
	});

console.log('Account Created');
console.log(newAccount);
}
else if(command == 'get')
{
	var account = getAccount(argv.name);
	if(typeof account === 'undefined')
		console.log('Enter a valid username');
	else
		console.log(account);
}
else
{
 console.log('Enter a valid command');
}
