// jshint devel:true
console.log('Hello World');
var words = ['POOR', 'STONE', 'SCOLD', 'RACIAL', 'WASTEFUL', 'MICE', 'RUN', 'SQUEAL', 'UNLOCK', 'PLANES', 'SMOGGY'];
var usedWords = [];
var usedLetters = [];
var updateWord = [];
var letter = [];


for (var i = 0; i < $("button").length; i++) {
  letter[i] = $("button")[i].innerHTML;
}

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
    updateWord.push('__ ');
  }
  return updateWord.join("");
}

//checks to see if the letter was already used
function checkLetter(letterToCheck) {
  if (usedLetters.indexOf(letterToCheck) === -1) {
    usedLetters.push(letterToCheck);
    return true;
  }
  else {
    return false;
  }
}

//searches for the chosen letter in word to be solved
function findLetter(letter) {
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter)
        updateWord[i] = letter;
      else updateWord[i] = updateWord[i];
    }
    return updateWord.join("");
}
//check to see if the letter the computer chose was already used.
function compLetterCheck() {

}
//computer chose random letter
function compPlay () {
  var buttons = $("button");
  var x = Math.floor(Math.random() * buttons.length);
  playLetter(buttons[x]);
  // console.log(rand);
  // playLetter(rand);
  }


// send the array of word in for one to be randomly chosen
var currentWord = wordToSolve(words)
$("#dashes").text(createDashes(currentWord));

// waits for the player to chose a letter
$("button").click(playLetter);

function playLetter(eventOrButton) {
  eventOrButton = eventOrButton ? eventOrButton.target : eventOrButton;
  console.log(eventOrButton);
  console.log('playLetter: eventOrButton = ' + eventOrButton);
  $(eventOrButton).css("backgroundColor", "white");
  eventOrButton.disabled = true;
  console.log(eventOrButton);
  var currentLetter = (eventOrButton).innerHTML;
  $("#dashes").text(findLetter(currentLetter));
}
