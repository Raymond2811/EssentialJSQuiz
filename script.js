const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const endContainer = document.getElementById("endContainer");
const scoreElement = document.getElementById("score");
const initialsElement = document.getElementById("initials");
const submitBtn = document.getElementById("submitBtn");
const quizContent = document.getElementById("quizContent");

let timeLeft = 60;
let timerInterval;

startBtn.addEventListener("click", startQuiz);


function startQuiz() {
    quizContent.style.display = "none";
    quizContainer.style.display = "block";
    startTimer();
    showQuestion();
  }

  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      if (timeLeft <= 0) {
        showExplosionAndEndQuiz();
      }
    }, 1000);
  }

  function showQuestion(){

  }

  function checkAnswer(){

  }

  function showFeedback(){

  }

  function showExplosionAndEndQuiz(){

  }

  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    scoreElement.textContent = score;
  }