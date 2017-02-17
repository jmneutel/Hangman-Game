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
	document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/opening.png">'
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
		// start messing around here
		if (numGuesses === 8){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/first.png">'
	}else if (numGuesses === 7){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/second.png">'
	}else if (numGuesses === 6){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/third.png">'
	}else if (numGuesses === 5){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/fourth.png">'
	}else if (numGuesses === 4){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/fifth.png">'
	}else if (numGuesses === 3){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/sixth.png">'
	}else if (numGuesses === 2){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/eighth.png">'
	}else if (numGuesses === 1){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/nineth.png">'
	}
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

