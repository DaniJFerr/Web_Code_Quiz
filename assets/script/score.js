
// Get the scores from local storage
let highScoreList = document.getElementById("highscores");
let clearScores = document.getElementById("clear");

function renderUsers() {
let scores = JSON.parse(localStorage.getItem("score"));

// Create an empty array to store the score objects
let scoreArray = [];

// Loop through the scores and push them to the scoreArray
for (let i = 0; i < scores.length; i++) {
  scoreArray.push(scores[i]);
}

// Sort the scoreArray by score in descending order
scoreArray.sort((a, b) => b.score - a.score);

// Create a list element for each score
scoreArray.forEach((scores) => {
  let li = document.createElement("li");
  li.textContent = `${scores.initial} - ${scores.score}`;
  document.getElementById("highscores").appendChild(li);
});

}
// Add event listener to clear highscores button
clearScores.addEventListener("click", function () {
  localStorage.clear();
  highScoreList.innerHTML = [];
});

// Call the function to render the user data list.
renderUsers();
