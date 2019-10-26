
var keyLog = document.getElementById("guessedLettersDiv");
// Come back to alphaList, not working as I would like.
var alphaList = /^[a-zA-Z]*$/;
var wordsToGuess = ["salchow", "toe loop", "axel jump", "biellmann position", "camel spin", "choctaw", "combination spin", "crossover", "death spiral", "edge jump", "flip jump", "flying spin", "hydrant lift", "layback spin", "jump sequence", "loop jump", "lutz jump", "overhead lifts", "rocker", "scratch spin", "twizzles", "sit spin", "spiral", "swizzle", "throw jump", "upright spin"]
var wordsRandom = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
var guessArray = [];
var unknownLetters = wordsRandom.length;

// Keyup or keydown, but not keypress. Keyup for single detection(?)
while (unknownLetters > 0) {
    document.addEventListener("keyup", event => {
        var key = event.key.toLowerCase();
        var str = String.fromCharCode(event.keyCode);
        // var keyLogText = document.getElementById("guessedLettersDiv").innerText;

        if (alphaList.test(key) === false) {
            return;
        } else {
            keyLog.innerHTML += str.toUpperCase() + " ";
        }
        console.log(key);

        for (var i = 0; i < wordsRandom.length; i++) {
            guessArray[i] = " _ ";
        }

        for (var l = 0; l < wordsRandom.length; l++) {
            if (wordsRandom[l] === event) {
                guessArray[l] = event;
                unknownLetters--;
            }
        }
    });
}



