let count1 = 0;
let count2 = 0;

let homeScoreCount = document.getElementById("home-count");
let awayScoreCount = document.getElementById("away-count");

function scorePointsHomeTeam(points) {
  count1 += points;
  homeScoreCount.textContent = count1;
}

function scorePointsAwayTeam(points) {
  count2 += points;
  awayScoreCount.textContent = count2;
}

function resetScore() {
  awayScoreCount.textContent = 0;
  homeScoreCount.textContent = 0;
  count1 = 0;
  count2 = 0;
}
