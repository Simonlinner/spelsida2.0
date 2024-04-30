// Generar ett readnom tal mellan 1 - 100 som sparas i variablen y
let y = Math.floor(Math.random() * 100 + 1);

// Variabel för att hålla reda på antal gissningar. Börjar med 1 eftersom spelaren gör sin första gissning.
let guess = 1;

// Funktionen körs när användaren klickar på knappen med id 'submitguess'
    document.getElementById("submitguess").onclick = function () {

// Hämtar värdet med id 'guessField' och sparar det i variabeln 'x'
    let x = document.getElementById("guessField").value;

// Jämför användarens gissning med det slumpmässigt genererade numret 'y'
    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}
