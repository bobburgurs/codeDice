function rollDice() {
  var randomNumber;
  var dice = document.querySelector(".dice p");
  var result = document.getElementById("result");
  var randomDecimal = Math.random();
  var randomTimesSix = randomDecimal * 6;
  var randomFloored = Math.floor(randomTimesSix);
  var randomNumberPlusOne = randomFloored + 1;
  var randomNumberString = String(randomNumberPlusOne);
  var resultTextStart = "You rolled a ";
  var resultTextEnd = "!";
  var resultText = resultTextStart + randomNumberString + resultTextEnd;
  randomNumber = randomNumberPlusOne;
  dice.innerText = randomNumberString;
  result.innerText = resultText;
}