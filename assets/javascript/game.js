
var keyLog = document.getElementById("guessedLettersDiv");
var alphaList = /[a-zA-Z]/;

// Keyup or keydown, but not keypress. Keyup for single detection(?)

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
});



