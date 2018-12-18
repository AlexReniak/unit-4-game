// set variables
// generate random computer score
// assign random value to pictures
// create reset function to change target score and crystal image value
// add wins and losses to html
// clicking on a picture will add points to total score
// if player matches score to computer score, they win
// if player goes over computer score, they lose
// game resets when player matches score, or goes over

var playerScore = 0;
var totalWins = 0;
var totalLosses = 0;
var pictureValue = [];
var targetValues = [59, 52, 63, 64, 72];
var targetScore;

function reset() {
  for(i = 0; i < 4; i++) {
    pictureValue[i] = Math.floor(Math.random() * 11 + 1);
  }
  console.log(pictureValue);
  targetScore = targetValues[Math.floor(Math.random() * targetValues.length)]
  console.log(targetScore);
  playerScore = 0;
  $("#target-value").text(`Target Score: ${targetScore}`);
  $("#wins-text").text(`Wins: ${totalWins}`);
  $("#losses-text").text(`Losses: ${totalLosses}`);
};

reset();

$("#player-score").text(`Current Score: ${playerScore}`)

for (var i = 0; i < pictureValue.length; i++) {

  var crystalImage = $("<img>");

  crystalImage.addClass("crystal-image");

  crystalImage.attr("src", "assets/images/crystal.jpg");

  crystalImage.attr("data-crystalvalue", pictureValue[i]);

  $("#crystals").append(crystalImage);
}

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  playerScore += crystalValue;
  alert("New Score: " + playerScore);

  if (playerScore === targetScore) {
    alert("You Win!");
    totalWins++
    reset();
  }

  else if (playerScore >= targetScore) {
    alert("Your lose. Try again.");
    totalLosses++
    reset();
  }
})


// for(i = 0; i < 3; i++) {
//  pictureValue[i] = Math.floor(Math.random() * 11 + 1);
//  console.log(pictureValue);
// }
// targetScore = Math.floor(Math.random() * 50 + 30);
// console.log(targetScore);