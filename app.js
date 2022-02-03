"use strict";
if (window.performance.navigation.type === 1) {
  rollDice();
}
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var img1 = "images/dice" + randomNumber1 + ".png";
  var img2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".player1").setAttribute("src", img1);
  document.querySelector(".player2").setAttribute("src", img2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".mainText").innerHTML = "🔥 Player 1 Wins";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector(".mainText").innerHTML = "Draw!";
  } else {
    document.querySelector(".mainText").innerHTML = "Player 2 Wins 🔥";
  }
}
