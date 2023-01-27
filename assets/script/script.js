// Quiz questions and answers
let questions = [
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

// variables to keep track of the current question, score, and timer
let currentQuestion = 0;
let score = 0;
let timer = 60;
let intervalId;

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
  let question = questions[currentQuestion];
  document.getElementById("question-title").textContent = question.text;
  let choices = document.getElementById("choices");
  choices.innerHTML = "";
  for (let  i = 0; i < question.choices.length; i++) {
    let  choice = document.createElement("button");
    choice.textContent = question.choices[i];
    choice.addEventListener("click", checkAnswer);
    choices.appendChild(choice);
  }
}

// Function to check if the answer is correct and move to the next question
function checkAnswer() {
  let audio = new Audio();
  if (this.textContent === questions[currentQuestion].choices[questions[currentQuestion].correct]) {
    document.getElementById("message").innerHTML = "Correct!";
    score++;
    audio.src = "./assets/sfx/correct.wav";
    audio.play();
  } else {
    document.getElementById("message").innerHTML = "Incorrect.";
    timer -= 10;
    audio.src = "./assets/sfx/incorrect.wav";
    audio.play();
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

// Function to end the quiz and show the final score
function endQuiz() {
  clearInterval(intervalId);
  if( score < 3){
    let message = document.getElementById("end-screen");
    message.querySelector("h2").innerHTML ="Sorry. Try Again!";
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = score;
  }else{  
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").textContent = score;
 }
}
// export {data};

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

  let initials = document.getElementById("initials").value;
  let finalScore = document.getElementById("final-score").textContent;
  let userData = JSON.parse(localStorage.getItem("score"));

    if (userData === null) {
      userData = [];
    }
    let data = {
      initial : initials 
      ,
      score: finalScore
}

if (data.initial === "") {
 alert("Your initials cannot be blank");
  return;
}
 
userData.push(data);
//save the score to local storage
localStorage.setItem("score", JSON.stringify(userData));
// //redirect to highscores page
window.location.href = "./highscores.html";
});



