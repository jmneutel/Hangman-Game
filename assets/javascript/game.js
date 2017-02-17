var wordList = [
"orchid",
"popcorn",
"shoelace",
"unforgettable",
"pneumonia",
"xylophone"
];

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame(){

	var numGuesses = 9;
	blanksAndSuccesses = [];
	wrongGuesses = [];
	

	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	letterInChosenWord = chosenWord.split("");
	numBlanks = letterInChosenWord.length;

	for (var i = 0; i < numBlanks; i++) {

		blanksAndSuccesses.push("___");
	};
	console.log(chosenWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);

	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
};

function checkLetters(letter){

	var letterInWord = false;

	for (var i = 0; i < numBlanks; i++){

		if (chosenWord[i] === letter){

			letterInWord = true;
		}
	};

	if (letterInWord){

		for (var i = 0; i < numBlanks; i++){

		if (chosenWord[i] === letter){

			blanksAndSuccesses[i] = letter;
		}
		}
	}else{

		numGuesses --;
		wrongGuesses.push(letter);
	};


};

function roundComplete(){

	document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	if (letterInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {

		winCounter ++;
		alert("You Win!");
		document.getElementById("win-counter").innerHTML = winCounter;
		wrongGuesses = [];
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		startGame();
	}else if (numGuesses === 0) {

		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		document.getElementById("loss-counter").innerHTML = lossCounter ++;
		numGuesses = 9;
		wrongGuesses = [];
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		document.getElementById("loss-counter").innerHTML = lossCounter ++;
		document.getElementById("guesses-left").innerHTML = numGuesses;
		alert("You just lost, sorry!");
		startGame();
	}

};


startGame();
document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we typed", letterGuessed)
	checkLetters(letterGuessed);
	roundComplete();
};































