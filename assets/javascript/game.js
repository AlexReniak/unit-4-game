// set variables
// generate random computer score
// assign random value to pictures
// create reset function to change target score and crystal image value
// pictures will have new values after reset
// clicking on a picture will add points to total score
// add wins and losses to html
// if player matches score to computer score, they win
// if player goes over computer score, they lose
// game resets when player matches score, or goes over

var playerScore = 0;
var totalWins = 0;
var totalLosses = 0;
var pictureValue = [1, 1, 1, 1];
var targetScore;

function reset() {

  targetScore = Math.floor(Math.random() * 50 + 30)

  console.log(targetScore);

  playerScore = 0;

  $("#target-value").text(`Target Score: ${targetScore}`);

  $("#wins-text").text(`Wins: ${totalWins}`);

  $("#losses-text").text(`Losses: ${totalLosses}`);

  $("#crystals").empty();

  
 for(i = 0; i < pictureValue.length; i++) {
  pictureValue[i] = Math.floor(Math.random() * 11 + 1);

 var crystalImage = $("<img>");

 crystalImage.addClass("crystal-image");

 crystalImage.attr("src", "assets/images/crystal.jpg");

 crystalImage.attr("data-crystalvalue", pictureValue[i]);

 $("#crystals").append(crystalImage);
}

};

reset();

console.log(pictureValue);

$("#crystals").on("click", ".crystal-image", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  playerScore += crystalValue;
  alert("New Score: " + playerScore);

  $("#player-score").text(`Current Score: ${playerScore}`)

  if (playerScore === targetScore) {
    alert("You win!");
    totalWins++
    reset();
  }

  else if (playerScore >= targetScore) {
    alert("Your lose. Click on a crystal to try again.");
    totalLosses++
    reset();
  }
})
