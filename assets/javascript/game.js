var currentWord = document.getElementById("currentWordDiv");
var guessTracking = document.getElementById("guessesLeftDiv");
var keyLog = document.getElementById("guessedLettersDiv");
var winTracking = document.getElementById("winsDiv");

var wordsToGuess = ["salchow", "toeloop", "axeljump", "biellmann", "camelspin"]

var wordsRandom = "";
var wordsRandomStr = [];
var totalGuessLength = 0;
var setArray = new Set();
var guessArray = [];
var alphaList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var guessedAlpha = [];

var winWin = 0;
var loseLose = 0;
var totalGuesses;

function helloDarkness() {
    wordsRandom = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    totalGuesses = Math.round(wordsRandom.length * 1.5);
    wordsRandomStr = wordsRandom.split("");
    totalGuessLength = wordsRandomStr.length;
    guessArray = [];
    guessedAlpha = [];

    for (var i = 0; i < totalGuessLength; i++) {
        guessArray.push("_");
    }

    currentWord.innerHTML = guessArray.join(" ");
    guessTracking.innerHTML = "Total remaining guesses: " + totalGuesses;
    keyLog.innerHTML = guessedAlpha.join(" ");
}

function verifyChikaChikaBoomBoom(letter) {
    if (alphaList.indexOf(letter) === -1) return;
    if (setArray.has(letter) === true) {
        return;
    } else {
        setArray.add(letter);
    }

    var foundInWord = false;

    for (var i = 0; i < totalGuessLength; i++) {
        if (wordsRandom[i] == letter) {
            foundInWord = true;
        }
    }

    if (foundInWord) {
        for (var k = 0; k < totalGuessLength; k++) {
            if (wordsRandom[k] == letter) {
                guessArray[k] = letter;
                guessedAlpha.push(letter.toUpperCase());
            }
        }
    } else {
        guessedAlpha.push(letter.toUpperCase());
        totalGuesses--;
    }
}

function runRightRoundBaby() {
    currentWord.innerHTML = guessArray.join(" ");
    guessTracking.innerHTML = "Total remaining guesses: " + totalGuesses;
    keyLog.innerHTML = guessedAlpha.join(" ");

    if (wordsRandomStr.toString() === guessArray.toString()) {
        winWin++;
        winTracking.innerHTML = winWin;
        helloDarkness();
    } else if (totalGuesses === 0) {
        loseLose++;
        helloDarkness();
    }
}

helloDarkness();

document.addEventListener("keyup", event => {
    var str = String.fromCharCode(event.keyCode);
    var strLower = str.toLowerCase();

    // if (alphaList.indexOf(event === -1) {
    //     return;
    // }
    if (setArray.has(event) === true) {
        return;
    }

    verifyChikaChikaBoomBoom(strLower);
    runRightRoundBaby();
})


// document.addEventListener("keyup", event => {
//     var str = String.fromCharCode(event.keyCode);
//     var strLower = str.toLowerCase();

//     guessTracking.innerText = "Number of guesses remaining: " + totalGuesses--;

//     if (alphaList.indexOf(keyGuess) === -1) return;
//     if (lettersArray.has(keyGuess) === true) {
//         return;
//     } else {
//         lettersArray.add(keyGuess);
//     }

//     if (splitString.indexOf(strLower) != -1) {
//         for (var i = 0; i < wordsRandom.length; i++) {
//             if (splitString[i] === strLower) {
//                 guessArray[i] = strLower;
//             }
//         }
//     }
//     console.log(guessArray);

//     keyLog.innerHTML += str.toUpperCase() + " ";
// })
// console.log(guessArray);
// // currentWord.innerHTML += guessArray.join(" ");


// // for (var i = 0; i < wordsRandom.length; i++) {
// //     guessArray[i] = "_";
// //     currentWord.innerText = guessArray.join(" ");
// //     currentWord.innerText += "\n" + wordsRandom;
// // }

































// var winTracking = document.getElementById("winsDiv");
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



