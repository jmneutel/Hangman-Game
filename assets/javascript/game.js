var wordList = [
"orchid",
"popcorn",
"shoelace",
"unforgettable",
"pneumonia",
"xylophone"
];

var wordPicked = "";
var letterInPickedWord = [];
var amountBlanks = 0;
var correct = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var remainingGuesses = 9;


function beginGame(){

	var remainingGuesses = 9;
	correct = [];
	wrongGuesses = [];
	

	wordPicked = wordList[Math.floor(Math.random() * wordList.length)];
	letterInPickedWord = wordPicked.split("");
	amountBlanks = letterInPickedWord.length;

	for (var i = 0; i < amountBlanks; i++) {

		correct.push("___");
	};
	console.log(wordPicked);
	console.log(amountBlanks);
	console.log(correct);

	document.getElementById("guesses-left").innerHTML = remainingGuesses;
	document.getElementById("word-blank").innerHTML = correct.join(" ");
	document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/opening.png">'
};

function checkLetters(letter){

	var letterInWord = false;

	for (var i = 0; i < amountBlanks; i++){

		if (wordPicked[i] === letter){

			letterInWord = true;
		}
	};

	if (letterInWord){

		for (var i = 0; i < amountBlanks; i++){

		if (wordPicked[i] === letter){

			correct[i] = letter;
		}
		}
	}else{

		remainingGuesses --;
		wrongGuesses.push(letter);
	if (remainingGuesses === 8){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/first.png">'
	}else if (remainingGuesses === 7){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/second.png">'
	}else if (remainingGuesses === 6){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/third.png">'
	}else if (remainingGuesses === 5){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/fourth.png">'
	}else if (remainingGuesses === 4){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/fifth.png">'
	}else if (remainingGuesses === 3){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/sixth.png">'
	}else if (remainingGuesses === 2){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/eighth.png">'
	}else if (remainingGuesses === 1){
		document.getElementById("zero").innerHTML = '<img id="one" src="assets/images/nineth.png">'
	}
	};


};
function roundFinished(){

	document.getElementById("word-blank").innerHTML = correct.join(" ");
	document.getElementById("guesses-left").innerHTML = remainingGuesses;
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	if (letterInPickedWord.join(" ") === correct.join(" ")) {

		winCounter ++;
		alert("You Win!");
		document.getElementById("win-counter").innerHTML = winCounter;
		wrongGuesses = [];
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		beginGame();
	}else if (remainingGuesses === 0) {

		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		document.getElementById("loss-counter").innerHTML = lossCounter ++;
		remainingGuesses = 9;
		wrongGuesses = [];
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
		document.getElementById("loss-counter").innerHTML = lossCounter ++;
		document.getElementById("guesses-left").innerHTML = remainingGuesses;
		alert("You just lost, sorry!");
		beginGame();
	}

};

beginGame();
document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we typed", letterGuessed)
	checkLetters(letterGuessed);
	roundFinished();
};

