// jshint devel:true
console.log('Hello World');
var words = ['POOR', 'STONE', 'SCOLD', 'RACIAL', 'WASTEFUL', 'MICE', 'RUN', 'SQUEAL', 'UNLOCK', 'PLANES', 'SMOGGY'];
var usedWords = [];
var usedLetters = [];
var updateWord = [];
var letter = [];
var MOVES = 6;
var missedLetters = MOVES;
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
  updateWord = [];
  for (var i = 0; i < slots.length; i++) {
    updateWord.push("__ ");
  }
  return updateWord.join("");
}

function turnsRemain(letter) {
  if (currentWord.indexOf(letter) === -1)
    missedLetters--;
  $("#movekeeper").text(missedLetters);
  if(missedLetters === 0) {
    alert("No more turns remaining!");
    resetPlay();
    missedLetters = MOVES;
  }
}

function score() {
  if (updateWord.indexOf("__ ") === -1) {
    playerscore++;
  $("#scorekeeper").text(playerscore);
  resetPlay();
  }
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

function resetPlay () {
  $('.btn-info').removeAttr('disabled');
  $('.btn-info').css('backgroundColor','blue');
  currentWord = wordToSolve(words)
  $('#dashes').empty();
  $("#dashes").text(createDashes(currentWord));
}

// send the array of word in for one to be randomly chosen
var currentWord = wordToSolve(words)

$("#dashes").text(createDashes(currentWord));
$("#scorekeeper").text(playerscore);
$("#movekeeper").text(missedLetters);

// waits for the player to chose a letter
$("button").click(function() {
    $(this).css("backgroundColor", "white");
    this.disabled = true;
    var currentLetter = (this).innerHTML;
    $("#dashes").text(findLetter(currentLetter));
});
