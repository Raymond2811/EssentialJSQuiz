const questions = [
    {
      question: "What does the term 'Hoisting' refer to in JavaScript?",
      choices: [
        "a) Lifting heavy objects with JavaScript", 
        "b) The process of moving all variable and function declarations to the top of their scope before code execution", 
        "c) Creating a virtual structure to organize your code",
        "d) Animating elements on a webpage",],
      answer: 1
    },
    
    {
        question: "Which of the following is not a JavaScript data type?",
        choices: ["String", "Boolean", "Undefined", "Float"],
        answer: 3
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: [
          "a) new",
          "b) let",
          "c) var",
          "d) const"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of a callback function in JavaScript?",
        choices: [
          "a) To stop the execution of the program",
          "b) To provide a way to style HTML elements",
          "c) To handle asynchronous operations and execute code after a certain task is completed",
          "d) To define CSS rules for a webpage"
        ],
        answer: 2
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        choices: ["+", "&", "-", "*"],
        answer: 0
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        choices: [
            "a) They are interchangeable and can be used interchangeably", 
            "b) 'null' represents an uninitialized variable, while 'undefined' indicates the absence of a value or an uninitialized variable", 
            "c) 'undefined' represents an empty string, while 'null' indicates a missing function", 
            "d) 'null' is used for mathematical calculations, while 'undefined' is used for logical operations"
        ],
        answer: 1
    }

];

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
let currentQuestionIndex = 0;

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