var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wScore = 0;

var lScore = 0;

var guessesLeft = 10;

var guessedLetters = [];

function reset(){ 
   guessesLeft = 10;
   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
}
function newlogged(){
guessedLetters = [];

}
function gameOver(){
   document.getElementById("guessedLetters").innerHTML = "Want to try again? "
}



document.onkeyup = function(event) {
  var userGuess = event.key;
 
  if (userGuess === computerGuess) {
    document.getElementById("wScore").innerHTML = "you win!" ;
    wScore++;
   // computerGuess[Math.floor(Math.random() * computerChoices.length)] = [];

    document.getElementById("wScore").innerHTML = "wins:" + wScore;
  }
  if (userGuess !== computerGuess) {
    guessesLeft--;
  }
  if (guessesLeft <= 0) {
     lScore++;
       reset();
       newlogged();
       gameOver();
    document.getElementById("lScore").innerHTML = "Loses:" + lScore;
     document.getElementById("computerChoice").innerHTML = "what you should have picked is " + computerGuess;
  }
  guessedLetters.push(userGuess)
  document.getElementById("tGuesses").innerHTML = "Guesses:" + guessesLeft; 
  document.getElementById("guessedLetters").innerHTML = "LETTERS YOU'VE ALREADY GUESSED: " + guessedLetters;
  
  
}
//   if (computerGuess > 10)
//   {Document.getElementById}
