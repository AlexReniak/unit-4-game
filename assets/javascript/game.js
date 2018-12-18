// set variables
// generate random computer score
// assign random value to pictures
// create reset function to change target score and crystal image value
// clicking on a picture will add points to total score
// add wins and losses to html
// if player matches score to computer score, they win
// if player goes over computer score, they lose
// game resets when player matches score, or goes over

var playerScore = 0;
var totalWins = 0;
var totalLosses = 0;
//var pictureValue;
//var targetValues = [59, 52, 63, 64, 72];
var targetScore;

function reset() {

  targetScore = Math.floor(Math.random() * 50 + 30)

  console.log(targetScore);

  playerScore = 0;

  $("#target-value").text(`Target Score: ${targetScore}`);

  $("#wins-text").text(`Wins: ${totalWins}`);

  $("#losses-text").text(`Losses: ${totalLosses}`);

};

reset();

  for (var i = 0; i < 4; i++) {

  var pictureValue = Math.floor(Math.random() * 11 + 1)
  console.log(pictureValue);

  var crystalImage = $("<img>");

  crystalImage.addClass("crystal-image");

  crystalImage.attr("src", "assets/images/crystal.jpg");

  crystalImage.attr("data-crystalvalue", pictureValue);

  $("#crystals").append(crystalImage);
}

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  playerScore += crystalValue;
  alert("New Score: " + playerScore);

  $("#player-score").text(`Current Score: ${playerScore}`)

  if (playerScore === targetScore) {
    alert("You win!");
    totalWins++
    //$("#wins-text").text(`Wins: ${totalWins}`);
    reset();
  }

  else if (playerScore >= targetScore) {
    alert("Your lose. Click on a crystal to try again.");
    totalLosses++
    //$("#losses-text").text(`Losses: ${totalLosses}`);
    reset();
  }
})


// for(i = 0; i < 4; i++) {
//  pictureValue[i] = Math.floor(Math.random() * 11 + 1);
// }
// targetScore = Math.floor(Math.random() * 50 + 30);
// console.log(targetScore);