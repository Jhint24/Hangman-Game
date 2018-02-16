
//pseudocode


//generate a word at random and store it in a variable

var wordList = ["homerun", "triple", "double", "single", "walk", "strikeout", "foulball", "pitcher", "hitter", "shortstop", "outfielder", "infielder", "bullpen", "dugout", "stadium",];

var wordRandom = wordList[Math.floor(Math.random()*wordList.length)];

//display the length of the word to the player

var answerBlank = [];

for (var i = 0; i < wordRandom.length; i++)   {
    answerBlank[i]="_";
}

    var lettersRemaining = wordRandom.length;

    //does this work? Yes
console.log(wordRandom)
console.log(answerBlank)
console.log(lettersRemaining)

    
//This function is run when the player presses a key 
    //determines pressed key
document.onkeyup = function(event) {
   
    playerGuess = event.key;

    if (playerGuess === null) {
        document.getElementById("alert").innerHTML = "Select a Valid Letter";
    }

    for (var j = 0; j < wordRandom.length; j++) {
        if (wordRandom[j] === playerGuess)  {
            answerBlank[j] = playerGuess;
            lettersRemaining--;
        } 

    }

    console.log(playerGuess)
    
    }






    //game loop



//if the guess is correct increment add letter to length of work prompt

//if the guess is incorrect decrease number of guesses remaining by 1

//keep track of guessed letters "letters already guessed"
//if guesses remaining = 0 then end game as a loss and move on to a new word

//if correct guesses is equal to the length of the word, tell the user they won and start a new game