// jshint devel:true
console.log('Hello World');
var words = ['POOR', 'STONE', 'SCOLD', 'RACIAL', 'WASTEFUL', 'MICE', 'RUN', 'SQUEAL', 'UNLOCK', 'PLANES', 'SMOGGY'];
var usedWords = [];
var usedLetters = [];
var updateWord = [];
var letter = [];
var whosPlay = 0;
var missedLetters = 0;
var playerscore = 0;


//picks a random word from the array and calls wordCheck on chosen word
function wordToSolve(wordArray) {
  var rand = wordArray[Math.floor(Math.random() * wordArray.length)];
  if (wordChecker(rand) === true) {
    return rand;
  }
  else {
    wordToSolve(words);
  }
}

//checkes for used word and stores them if never used
//returns true if the word was never used
function wordChecker(wordToCheck) {
  if (usedWords.indexOf(wordToCheck) === -1) {
    usedWords.push(wordToCheck);
    return true;
  }
  else {
    return false;
  }
}

//figures how many letters are in the word to be solve and prints the dashes
function createDashes(slots) {
  for (var i = 0; i < slots.length; i++) {
    updateWord.push("__ ");
  }
  return updateWord.join("");
}

function turnsRemain(letter) {
  if (currentWord.indexOf(letter) === -1)
    missedLetters++;
}

function score() {
  if (updateWord.indexOf("__ ") === -1)
    playerscore++;
}

//searches for the chosen letter in word to be solved
function findLetter(letter) {
  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === letter) {
      updateWord[i] = letter;
    }
    else {
      updateWord[i] = updateWord[i];
    }
  }
  turnsRemain(letter);
  score();
  return updateWord.join("");
}

// send the array of word in for one to be randomly chosen
var currentWord = wordToSolve(words)

$("#dashes").text(createDashes(currentWord));

$("button").click(function() {
  if (whosPlay == 0) {
    whosPlay = 1;
    var person = prompt("Please enter player's name: ");
    $("#playerone").text(person);
    $("#start").css("visibility", "hidden");
    $("#hanghim").css("visibility", "visible");
    $("#score").css("visibility", "visible");
    $("#buttong1").css("visibility", "visible");
    $("#buttong2").css("visibility", "visible");
    $("#dashes").css("visibility", "visible");
  }
});


// waits for the player to chose a letter
$("button").click(function() {
    $(this).css("backgroundColor", "white");
    this.disabled = true;
    var currentLetter = (this).innerHTML;
     if (missedLetters > 6) {
  alert("No more turns remaining!");
    $('#buttong1').load(document.URL + '#buttong1');
    // $("buttong1").css("visibility", "visible");
      }
    $("#dashes").text(findLetter(currentLetter));
});
