'use strict';
// jshint devel:true
/*global $:false */

console.log('Hello World');
var words = ['POOR', 'STONE', 'SCOLD', 'RACIAL', 'WASTEFUL', 'MICE', 'RUN', 'SQUEAL', 'UNLOCK', 'PLANES', 'SMOGGY'];
var usedWords = [];
var updateWord = [];
var playerscore = 0;
var MOVES = 6;
var missedLetters = MOVES;
var maxValue = 0;


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
// send the array of word in for one to be randomly chosen
var currentWord = wordToSolve(words);

//figures how many letters are in the word to be solve and prints the dashes
function createDashes(slots) {
  updateWord = [];
  for (var i = 0; i < slots.length; i++) {
    updateWord.push('__ ');
  }
  return updateWord.join('');
}

function resetPlay () {
  $('.btn-info').removeAttr('disabled');
  $('.btn-info').css('backgroundColor', '#5bc0de');
  currentWord = wordToSolve(words);
  $('#dashes').empty();
  $('#dashes').text(createDashes(currentWord));
  missedLetters = MOVES;
  $('#movekeeper').text(missedLetters);
  maxValue = 0;
  $('#hanghim').css('maxHeight', maxValue);
}

function turnsRemain(letter) {
  if (currentWord.indexOf(letter) === -1) {
    missedLetters--;
    maxValue += 50;
  $('#hanghim').css('maxHeight', maxValue);
  $('#movekeeper').text(missedLetters);
  }
  if(missedLetters === 0) {
    alert('No more turns remaining!');
    resetPlay();
    missedLetters = MOVES;
  }
}

function score() {
  if (updateWord.indexOf('__ ') === -1) {
    playerscore++;
  $('#scorekeeper').text(playerscore);
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
  return updateWord.join('');
}

$('#dashes').text(createDashes(currentWord));
$('#scorekeeper').text(playerscore);
$('#movekeeper').text(missedLetters);

// waits for the player to chose a letter
$('button').click(function() {
    $(this).css('backgroundColor', 'white');
    this.disabled = true;
    var currentLetter = (this).innerHTML;
    $('#dashes').text(findLetter(currentLetter));
});
