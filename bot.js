// Hello world check.
console.log("Up 'n' running… 😎 \n");

// Import. library.
var Twit = require('twit');

// Importing the access configuration.
var Config = require('./config');

// LOgging in a variable.
var T = new Twit(Config);

// Twitting stuff.

tweetIt();
setInterval( tweetIt, 1000*30);

function tweetIt(){
	var r = Math.floor(Math.random()*100);

	var tweet = {
	// status: "i'm a 🤖 and i'm working… 🤓",
	status: r + " is a gret number for a 🤖",
};
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err) {
			console.log("Something went wrong… 😰 \n");
		} else {
			console.log("Everything went fine… 🙌 \n");
		}
	}	

}
