
//pseudocode


//generate a word at random and store it in a variable

var wordList = ["homerun", "triple", "double", "single", "walk", "strikeout", "foulball", "pitcher", "hitter", "shortstop", "outfielder", "infielder", "bullpen", "dugout", "stadium",];

var wordRandom = wordList[Math.floor(Math.random()*wordList.length)];

//display the length of the word to the player

var answerWord = [];

for (var i = 0; i < wordRandom.length; i++)   {
    answerWord[i]="_";
}

var lettersRemaining = wordRandom.length;
//prompt the player to guess a letter


//if the guess is correct increment add letter to length of work prompt

//if the guess is incorrect decrease number of guesses remaining by 1

//keep track of guessed letters "letters already guessed"
//if guesses remaining = 0 then end game as a loss and move on to a new word

//if correct guesses is equal to the length of the word, tell the user they won and start a new game