// Quiz questions and answers
var questions = [
  {
    text: "If you type the following code in the console window, what result will you get? 3>2>1 === false;",
    choices: ["True","false"],
    correct: 0
  },
  {
    text: "JavaScript is a ___ -side programming language.?",
    choices: ["Client", "Server", "Both", "None"],
    correct: 2
  },
  {
    text: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choices: [" alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"],
    correct: 3
  },
  {
    text: "How do you find the minimum of x and y using JavaScript?",
    choices: ["min(x,y);", " Math.min(x,y)", "Math.min(xy)", " min(xy);"],
    correct: 1
  },
  {
    text: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    choices: ["if(x 2)", "if(x = 2)", " if(x == 2)", " if(x != 2 )"],
    correct: 2
  },
  {
    text: "Which JavaScript label catches all the values, except for the ones specified??",
    choices: ["catch", "label", "try", "default"],
    correct: 1
  },

  // more questions here
];

// Variables to keep track of the current question, score, and timer
var currentQuestion = 0;
var score = 0;
var timer = 60;
var intervalId;

// Function to start the quiz
function startQuiz() {
  // Hide the start screen and show the questions
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // Start the timer
  intervalId = setInterval(countdown, 1000);
  showQuestion();
}

// Function to show the current question and its choices
function showQuestion() {
  var question = questions[currentQuestion];
  document.getElementById("question-title").textContent = question.text;
  var choices = document.getElementById("choices");
  choices.innerHTML = "";
  for (var i = 0; i < question.choices.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = question.choices[i];
    choice.addEventListener("click", checkAnswer);
    choices.appendChild(choice);
  }
}

// Function to check if the answer is correct and move to the next question
function checkAnswer() {
  if (this.textContent === questions[currentQuestion].choices[questions[currentQuestion].correct]) {
 
    score++;
  } else {

    timer -= 10;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});
function makeSound(key) {

  switch (key) {
    case "choices":
      let tom1 = new Audio("./assets/sfx/correct.wav");
      tom1.play();
      break;
  }
}

// Function to end the quiz and show the final score
function endQuiz() {
  clearInterval(intervalId);
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  if( score < 3){
    document.getElementById("end-screen").textContent =("h2","Sorry. Try Again!");
    document.getElementById("final-score").textContent = score;
  }else{  
  document.getElementById("final-score").textContent = score;
}
}

// Function to update the timer and end the quiz when it reaches 0
function countdown() {
  timer--;
  document.getElementById("time").textContent = timer;
  if (timer === 0) {
    endQuiz();
  }
}

// Event listener for the start button
document.getElementById("start").addEventListener("click", startQuiz);

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", function(){
    var initials = document.getElementById("initials").value;
    var finalScore = document.getElementById("final-score").textContent;
    var data = {
        initial : initials
        ,
score: finalScore
}
//save the score to local storage
localStorage.setItem("score", JSON.stringify(data));
//redirect to highscores page
window.location.href = "highscores.html";
});

// // Set up the game
// let answer = [];
// let CorrectAnswer = "javascript";
// let wordArray = wordToGuess.split("");
// let guessedWord = [];
// for (let i = 0; i < wordArray.length; i++) {
//   guessedWord[i] = "_";
// }
// let timer;
// let timeLeft = 60;
// let wins = 0;
// let losses = 0;
// document.getElementById("word").innerHTML = guessedWord.join(" ");

// // Start the game
// function startGame() {
//   document.getElementById("start").style.display = "none";
//   document.getElementById("guess").style.display = "inline-block";
//   document.getElementById("submit").style.display = "inline-block";
//   timer = setInterval(countdown, 1000);
// }

// // Check the player's guess
// function checkGuess() {
//   let guess = document.getElementById("guess").value;
//   if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     return;
//   }
//   let correctGuess = false;
//   for (let i = 0; i < wordArray.length; i++) {
//     if (wordArray[i] === guess) {
//       guessedWord[i] = guess;
//       correctGuess = true;
//     }
//   }
//   if (correctGuess) {
//     document.getElementById("message").innerHTML = "Correct!";
//   } else {
//     document.getElementById("message").innerHTML = "Incorrect.";
    
//   }
//   document.getElementById("word").innerHTML = guessedWord.join(" ");
//   if (guessedWord.join("") === wordToGuess) {
//     alert("You win!");
//     clearInterval(timer);
//     wins++;
//     document.getElementById("win-Loss").innerHTML = "Wins: " + wins + " Losses: " + losses;
//     resetGame();
//     }
//     }
    
//     // Countdown timer
//     function countdown() {
//     timeLeft--;
//     document.getElementById("timer").innerHTML = "Time Left: " + timeLeft;
//     if (timeLeft === 0) {
//     alert("Time's up! You lose.");
//     clearInterval(timer);
//     losses++;
//     document.getElementById("win-Loss").innerHTML = "Wins: " + wins + " Losses: " + losses;
//     resetGame();
//     }
//     }
    
//     // Reset the game
//     function resetGame() {
//     wordToGuess = "javascript";
//     wordArray = wordToGuess.split("");
//     guessedWord = [];
//     for (var i = 0; i < wordArray.length; i++) {
//     guessedWord[i] = "_";
//     }
//     timeLeft = 60;
//     document.getElementById("word").innerHTML = guessedWord.join(" ");
//     document.getElementById("guess").value = "";
//     document.getElementById("start").style.display = "inline-block";
//     document.getElementById("guess").style.display = "none";
//     document.getElementById("submit").style.display = "none";
//     document.getElementById("message").innerHTML = "";
//     }
    
  