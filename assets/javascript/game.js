//create list of variables to be used, including the word list
var wordList = ["homerun", "triple", "double", "single", "walk", "strikeout", "foulball", "pitcher", "hitter", "shortstop", "outfielder", "infielder", "bullpen", "dugout", "stadium",];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var wordRandom;
//included for guessed letters
var letterGuessed = [];
//included after for wins
var winCounter = 0;
//function to choose random word
function startGame()    {
    wordRandom = wordList[Math.floor(Math.random()*wordList.length)];

    for(var i = 0; i < wordRandom.length; i++)  {
       underScores.push('_');
     
    }
    //test
    console.log(underScores)
    //send the blanks to the screen
    document.getElementById('current-word').innerHTML = underScores.join(" ");

    //reset
    wrongLetter = [];
    guessesLeft = 9;
    //HTML
    document.getElementById("guesses-remaining").innerHTML = guessesLeft;
}
function winLose()  {

    if  (winCounter === wordRandom.length)  {
        alert("That's a W");
    }
    else if (guessesLeft === 0)   {
        alert("You Must be a Cubs Fan")
    }
}
//capture the players input
document.onkeyup = function (event)  {
    userGuesses = event.key;
        console.log(userGuesses);
    if(wordRandom.indexOf(userGuesses) > -1)   {
        for (var i = 0; i < wordRandom.length; i++) {
            
            if (wordRandom[i] === userGuesses)  {
            
                underScores[i] = userGuesses;
                document.getElementById("current-word").innerHTML = underScores.join(" ");
                winCounter++;
                winLose();
            }
        }
    }
    else    {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        wrongLetter = letterGuessed;
        document.getElementById("letters-guessed").innerHTML = letterGuessed.join(" ");
        document.getElementById("guesses-remaining").innerHTML = guessesLeft;
        console.log(wrongLetter)
        winLose();
    }
}


//main game start
startGame();