// jshint devel:true
console.log('Hello World');
var words = ['POOR', 'STONE', 'SCOLD', 'RACIAL', 'WASTEFUL', 'MICE', 'RUN', 'SQUEAL', 'UNLOCK', 'PLANES', 'SMOGGY'];
var usedWords = [];
var updateWord = [];
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


function findLetter(letter) {
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter)
        updateWord[i] = letter;
      else updateWord[i] = updateWord[i];
    }
    return updateWord.join("");
}


var currentWord = wordToSolve(words)
$("#dashes").text(createDashes(currentWord));

$("button").click(function () {
  $(this).css("backgroundColor", "white");
  // $(this).removeAttr("href");
  console.log((this).innerHTML);
  var currentLetter = (this).innerHTML;
  $("#dashes").text(findLetter(currentLetter));

});

// console.log(wordToSolve(words));
// console.log(usedWords);
// i++;
