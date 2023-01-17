
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
let highscores = JSON.parse(localStorage.getItem("final-score"));
let highscoresList = document.getElementById("highscores");
for (let i = 0; i < highscores.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = highscores[i].initial + ": " + highscores[i].score;
    highscoresList.appendChild(newLi);
}


