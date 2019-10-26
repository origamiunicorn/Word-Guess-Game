var keyLog = document.getElementById("guessedLettersDiv");

var wordsToGuess = ["salchow", "toeloop", "axeljump", "biellmann", "camelspin"]
var wordsRandom = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
var lettersArray = new Set();
var guessArray = [];
var alphaList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("keyup", event => {
    var keyGuess = event.key.toLowerCase();
    var str = String.fromCharCode(event.keyCode);

    if (alphaList.indexOf(keyGuess) === -1) return;
    if (lettersArray.has(keyGuess) === true) {
        return;
    } else {
        lettersArray.add(keyGuess);
    }
    keyLog.innerHTML += str.toUpperCase() + " ";
    console.log(str);
})


































// var winsTracking = document.getElementById("winsDiv");
// var currentWord = document.getElementById("currentWordDiv");
// var guessTracking = document.getElementById("guessesLeftDiv");
// var keyLog = document.getElementById("guessedLettersDiv");
// var alphaList = /^[a-zA-Z]*$/; // Return to later, not satisfied. 
// var wordsToGuess = ["salchow", "toeloop", "axeljump", "biellmann", "camelspin"]
// // , "choctaw", "combination spin", "crossover", "deathspiral", "edgejump", "flipjump", "flying spin", "hydrantlift", "laybackspin", "jumpsequence", "loopjump", "lutzjump", "overheadlifts", "rocker", "scratchspin", "twizzles", "sitspin", "spiral", "swizzle", "throwjump", "uprightspin"
// var wordsRandom = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
// var totalGuesses = Math.round(wordsRandom.length * 1.5);
// var guessArray = [];
// var lettersLeft = wordsRandom.length;
// var wins = 0;
// var guessedSet = new Set();

// for (var i = 0; i < wordsRandom.length; i++) {
//     guessArray[i] = "_";
//     currentWord.innerHTML = guessArray.join(" ");
//     currentWord.innerText += "\n" + wordsRandom;
//     guessTracking.innerText = "Number of guesses remaining: " + totalGuesses;
// }

// document.addEventListener("keyup", event => {
//     var keyGuess = event.key.toLowerCase();
//     var str = String.fromCharCode(event.keyCode);

//     guessTracking.innerText = "Number of guesses remaining: " + totalGuesses--;

//     if (alphaList.test(keyGuess) === false) {
//         return;
//     }
//     else if (keyGuess.indexOf(guessedSet) === true) {
//         return;
//     } else {
//         keyLog.innerHTML += str.toUpperCase() + " ";
//     }
//     console.log(keyGuess);

//     guessedSet.add(keyGuess);
//     console.log(guessedSet);

//     // var checkKey = wordsRandom.split("");
//     // console.log(checkKey);

//     if (wordsRandom.indexOf(str) != -1) {
//         for (var k = 0; k < wordsRandom.length; k++) {
//             if (wordsRandom[k] == str)
//                 guessArray[k] = wordsRandom[k];
//         }
//     }

// });



