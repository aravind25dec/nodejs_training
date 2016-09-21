var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined')
console.log('Welcome '+ argv.name);
else
console.log('Hello World')



