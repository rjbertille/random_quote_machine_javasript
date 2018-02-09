
var quotes = ["\"Take in Easy\"", "\"Stay in your Lane\"", "\"You want to win? Work Harder!!!\"", "\"Be satisfied doesnt mean settling\"", "\"Only execution MATTER!!!!\""]

function newBtn() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));

	document.getElementById('values').innerHTML = quotes[randomNumber];
}




