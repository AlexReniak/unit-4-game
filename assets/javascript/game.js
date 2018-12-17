// set variables
// generate random computer score
// assign random value to pictures
// create reset function
// clicking on a picture will add points to total score
// if player matches score to computer score, they win
// if player goes over computer score, they lose
// game resets when player matches score, or goes over

var playerScore = 0;
var wins = 0;
var losses = 0;
var pictureValue = [3, 5, 8, 9]
var computerValue = Math.floor(Math.random() * 100 + 20);

$("computer-value").text(computerValue);

function reset() {
  computerValue = Math.floor(Math.random() * 100 + 20);
};

for (var i = 0; i < pictureValue.length; i++) {

  var crystalImage = $("<img>");

  crystalImage.addClass("crystal-image")

  crystalImage.attr("src", "SOURCE");

  crystalImage.attr("data-crystalvalue", pictureValue[i]);

  $("#crystals").append(crystalImage);
}

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  playerScore += crystalValue;
  alert("New Score: " + playerScore)

  if (playerScore === computerValue){
    alert("You Win!");
    reset();
  }

  else if (playerScore >= computerValue) {
    alert("Your lose. Try again.");
    reset();
  }
});
