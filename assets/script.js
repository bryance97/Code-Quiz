//Variables
var startButton = document.getElementById("start");
var timerContent = document.getElementById("timer");
var timeLeft = 75;

var quizContent = document.getElementById("quiz");
var quizQuestion = document.getElementById("questions");
var questionCount = 0;

var gameContent = document.getElementById("gameover");
var gameScore = document.getElementById("finalScore");
var scoreContent = document.getElementById("score");

var highscoreContent = document.getElementById("highscore");
var scorecontent = document.getElementById("scorePage");

var endgameContent = document.getElementById("endGame");

var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");

//Questions and Answers

var myQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correct: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correct: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correct: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correct: "console.log",
  },
];

var finalQuestionIndex = myQuestions.length;
var currentQuestionIndex = 0;
var questionCount = 0;

// start timer questions
function startQuiz() {
  startpageContent.style.display = "none";
  gameContent.style.display = "block";
  questionCount = 0;

  setTime();
  generateQuestion(questionCount);
}

function generateQuestion(id) {
  if (id < myQuestions.length) {
    quizQuestion.textContent = myQuestions[id].question;
    button1.textContent = myQuestions[id].answers[0];
    button2.textContent = myQuestions[id].answers[1];
    button3.textContent = myQuestions[id].answers[2];
    button4.textContent = myQuestions[id].answers[3];
  }
}

//fucton to start timer
function timer() {
  var timeLeft = 75;

  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(timeLeft);
      //Display message here
    } else {
      timeLeft--;
      timerEl.textContent = timeLeft + "seconds left";
    }
  }, 1000);
}

var startQuiz = function () {
  var startButton = document.querySelector("#start-btn");
  startButton.onclick = timer();
};

function checkAnswer(event) {
  event.preventDefault();

  if (myQuestions[questionCount].correctAnswer === event.target.value) {
    p.textContent = "Correct!";
  } else if (myQuestions[questionCount].correctAnswer !== event.target.value) {
    timeLeft = timeLeft - 10;
    p.textContent = "Wrong!";
  }

  if (questionCount < myQuestions.length) {
    questionCount++;
  }

  setQuestion(questionCount);
}
