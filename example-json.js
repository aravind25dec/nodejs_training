var person = {
	name: 'Aravindhan',
	age: 24
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject);

console.log(typeof personObject);
