
// import the score.js file
import * as score from "./script.js";

// call the event listener for the start button
document.getElementById("start").addEventListener("click", score.startQuiz);

// call the event listener for the submit button
document.getElementById("submit").addEventListener("click", score.submitScore);

// event listener for the clear highscores button
document.getElementById("clear").addEventListener("click", function(){
    localStorage.removeItem("score");
    location.reload();
});

// code to display the highscores
let highscores = JSON.parse(localStorage.getItem("score"));
let highscoresList = document.getElementById("highscores");
for (let i = 0; i < highscores.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = highscores[i].initial + ": " + highscores[i].score;
    highscoresList.appendChild(newLi);
}






// import { countdown, endQuiz ,submitScore } from './script.js';

// // Get the scores from local storage
// let scores = JSON.parse(localStorage.getItem("score"));

// // Create an empty array to store the score objects
// let scoreArray = [];

// // Loop through the scores and push them to the scoreArray
// for (let i = 0; i < scores.length; i++) {
//   scoreArray.push(scores[i]);
// }

// // Sort the scoreArray by score in descending order
// scoreArray.sort((a, b) => b.score - a.score);

// // Create a list element for each score
// scoreArray.forEach((score) => {
//   let li = document.createElement("li");
//   li.textContent = `${score.initials} - ${score.score}`;
//   document.getElementById("highscores").appendChild(li);
// });

// // Add event listener to clear highscores button
// document.getElementById("clear").addEventListener("click", function() {
//   localStorage.removeItem("score");
//   location.reload();
// });