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

    verifyChikaChikaBoomBoom(strLower);
    runRightRoundBaby();
})