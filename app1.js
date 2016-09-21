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

console.log(getAccount('Facebook'));
