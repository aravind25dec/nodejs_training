var request = require('request');

var url ='http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=bf31a412a2ebc3e310407585c2631f82&units=metric';

request({ 
	url: url,
	auth: {
	    user: 'ar306633',
	    password: 'aravind!11'
	},
	json: true 
}, function(error, response, body){
	if(error){
	console.log(' Unable to fetch wether');
	} else {
	console.log(JSON.stringify(body, null, 4));

	console.log('Its '+ body.main.temp +' in '+body.name);
	}
});


