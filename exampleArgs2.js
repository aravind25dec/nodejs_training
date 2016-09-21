var argv = require('yargs')
	.command('hello','Greets the user', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name'
			},
		})
		.help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);
if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined')
console.log('Welcome '+ argv.name +' ' + argv.lastname);
else if(command === 'hello' && typeof argv.name !== 'undefined')
console.log('Welcome '+ argv.name);
else
console.log('Hello World')
