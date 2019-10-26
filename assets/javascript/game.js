var winsTracking = document.getElementById("winsDiv");
var currentWord = document.getElementById("currentWordDiv");
var guessTracking = document.getElementById("guessesLeftDiv");
var keyLog = document.getElementById("guessedLettersDiv");
var alphaList = /^[a-zA-Z]*$/; // Return to later, not satisfied.
var wordsToGuess = ["salchow", "toe loop", "axel jump", "biellmann position", "camel spin", "choctaw", "combination spin", "crossover", "death spiral", "edge jump", "flip jump", "flying spin", "hydrant lift", "layback spin", "jump sequence", "loop jump", "lutz jump", "overhead lifts", "rocker", "scratch spin", "twizzles", "sit spin", "spiral", "swizzle", "throw jump", "upright spin"]
var wordsRandom = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
var guessArray = [];
var unknownLetters = wordsRandom.length;
var wins = 0;

// Select a random word, set it to be filled with blank spaces. Like my brain! It's a veritable swiss cheese in here...
for (var i = 0; i < wordsRandom.length; i++) {
    guessArray[i] = "_";
    currentWord.innerHTML = guessArray.join(" ");
}

// Keyup or keydown, but not keypress. 
document.addEventListener("keyup", event => {
    var key = event.key.toLowerCase();
    var str = String.fromCharCode(event.keyCode);

    if (alphaList.test(key) === false) {
        return;
    } else {
        keyLog.innerHTML += str.toUpperCase() + " ";
    }
    console.log(key);

    // for (var l = 0; l < wordsRandom.length; l++) {
    //     if (wordsRandom[l] === event) {
    //         guessArray[l] = event;
    //         unknownLetters--;
    //     }
    // }
});



