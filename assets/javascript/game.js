var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var recentGuesses = [];
var userGuess = "";
var computerGuess;

function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    numGuesses = 9;
    recentGuesses = [];
    $("#guessesLeft").text(numGuesses);
    $("#guesses").text(recentGuesses);
}

reset();


document.onkeyup = function (event) {
    userGuess = event.key;



    if (computerChoices.includes(userGuess)) {

        
        if (userGuess === computerGuess) {
            wins++;
            console.log("Wins: " + wins);
            $("#wins").text(wins);
            reset();
        }
        else {
            numGuesses--;
            $("#guessesLeft").text(numGuesses)
            recentGuesses.push(userGuess);            
            $("#guesses").text(recentGuesses.join(", "));

        }

        if (numGuesses === 0) {
            losses++;
            console.log("Losses: " + losses);
            $("#losses").text(losses);
            reset();
        }
        

    } else {
        alert("please pick a letter")
    }


};

