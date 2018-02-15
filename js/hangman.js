// Creates array (list of words)
var wordsArr = [
	"FROZEN",
	"TROLLS",
	"TANGLED",
	"SING",
	"MOANA",
	"ZOOTOPIA",
	"UP",
	"SMURFS THE LOST VILLAGE",
	"THE INCREDIBLES"
];

//Array for resetGame
var word;

//Array to add underscore at beginning of guess
var underscore = "";

//Number guesses for player
var playerGuess = 12;

//Function to reset game/word whenever player loses
function resetGame() {
	word = words[Math.floor(Math.random() * words.length)];
	underscore = "";
	for (var i = 0; i < word.length; i++) {
		underscore += "_ ";
	}
	playerGuess = 12;
	$("#remain").text(playerGuess);
	$("#right").text("");
	$("#right").text(underscore);
}
resetGame();

//Beginning of keyup function for keyboard click
$(document).keyup(function(events) {});
//Beginning of for loop for word length
for (var i = 0; i < wordArray.length; i++) {
	if (events.key === wordArray[i]) {
		indices.push(i);
	} else {
		$("#wrong").append(events.key);
		playerGuess--;
		//If player guess equals to 0, reset game
		if (playerGuess === 0) {
			resetGame();
		} else {
			//Else, number of guesses remaining will decrease
			$("#remain").text(playerGuess);
		}
	}
}
