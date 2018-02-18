//create list of variables to be used, including the word list
var wordList = ["homerun", "triple", "double", "single", "walk", "strikeout", "foulball", "pitcher", "hitter", "shortstop", "outfielder", "infielder", "bullpen", "dugout", "stadium",];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var remainingGuesses = 9;
var blanks = [];
var playerGuesses = [];
var wordRandom;
//included for guessed letters
var letterGuessed = [];
//included after for wins
var winCounter = 0;
//end current word??????????????????????????????
//start new word????????????????????
//var nextWord;
//function to choose random word
function startGame()    {
    wordRandom = wordList[Math.floor(Math.random()*wordList.length)];

    for(var i = 0; i < wordRandom.length; i++)  {
       blanks.push('_');
     
    }
    //test
    console.log(blanks)
    //send the blanks to the screen
    document.getElementById('current-word').innerHTML = blanks.join(" ");

    //reset
    wrongLetter = [];
    remainingGuesses = 9;
    //goes to HTML
    document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
}
//win or lose function written need to end word/start new?
function winLose()  {

    if  (winCounter === wordRandom.length)  {
        alert("That's a W");
        wins++;
        document.getElementById("win-total").innerHTML = wins;

    }
    else if (remainingGuesses === 0)   {
        alert("You Must be a Cubs Fan")
    }
}
//capture the players input
document.onkeyup = function (event)  {
    playerGuesses = event.key;
    //test
        console.log(playerGuesses);
        //win parameters
    if(wordRandom.indexOf(playerGuesses) > -1)   {
        for (var i = 0; i < wordRandom.length; i++) {
            
            if (wordRandom[i] === playerGuesses)  {
            
                blanks[i] = playerGuesses;
                document.getElementById("current-word").innerHTML = blanks.join(" ");
                winCounter++;
                winLose();
            }
        }
    }
    //loss paramente
    else    {
        wrongLetter.push(playerGuesses);
        remainingGuesses--;
        wrongLetter = letterGuessed;
        document.getElementById("letters-guessed").innerHTML = letterGuessed.join(" ");
        document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
        console.log(wrongLetter)
        winLose();
    }
}


//main game start
startGame();

////pseudocode


//generate a word at random and store it in a variable

//var wordList = ["homerun", "triple", "double", "single", "walk", "strikeout", "foulball", "pitcher", "hitter", "shortstop", "outfielder", "infielder", "bullpen", "dugout", "stadium",];

//var wordRandom = wordList[Math.floor(Math.random()*wordList.length)];

//display the length of the word to the player

//var answerBlank = [];

//for (var i = 0; i < wordRandom.length; i++)   {
//    answerBlank[i]="_";
//}

  //  var lettersRemaining = wordRandom.length;

    //does this work? Yes
//console.log(wordRandom)
//console.log(answerBlank)
//console.log(lettersRemaining)

    
//This function is run when the player presses a key 
    //determines pressed key
//document.onkeyup = function(event) {
   
  //  playerGuess = event.key;

    //if (playerGuess === null) {
      //  document.getElementById("alert").innerHTML = "Select a Valid Letter";
    //}

    //for (var j = 0; j < wordRandom.length; j++) {
      //  if (wordRandom[j] === playerGuess)  {
        //    answerBlank[j] = playerGuess;
          //  lettersRemaining--;
        //} 

    //}

    //console.log(playerGuess)
    
    //}


//list of guessed letters, matched letters, display of those ,exists in word... if yes, print yes, if no, print no "push onto new array og guessed letters"

//form, enter single letter, document.ready


    //game loop



//if the guess is correct increment add letter to length of work prompt

//if the guess is incorrect decrease number of guesses remaining by 1

//keep track of guessed letters "letters already guessed"
//if guesses remaining = 0 then end game as a loss and move on to a new word

//if correct guesses is equal to the length of the word, tell the user they won and start a new game