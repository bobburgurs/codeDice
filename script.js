function rollDice() {
  // random number 
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // output on the result text
  var dice = document.querySelector(".dice p");
  var result = document.getElementById("result");
  var randomNumString = randomNumber.toString();

  // text
  var resultText = "You rolled a " + randomNumString + "!";

  // update the result 
  dice.innerText = randomNumString;
  result.innerText = resultText;
}