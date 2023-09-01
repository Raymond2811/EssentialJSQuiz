const questions = [
    {
      question: "What does the term 'Hoisting' refer to in JavaScript?",
      choices: [
        "A) Lifting heavy objects with JavaScript", 
        "B) The process of moving all variable and function declarations to the top of their scope before code execution", 
        "C) Creating a virtual structure to organize your code",
        "D) Animating elements on a webpage",],
      answer: 1
    },
    
    {
        question: "Which of the following is not a JavaScript data type?",
        choices: ["A) String", "B) Boolean", "C) Undefined", "D) Float"],
        answer: 3
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: [
          "A) new",
          "B) let",
          "C) var",
          "D) const"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of a callback function in JavaScript?",
        choices: [
          "A) To stop the execution of the program",
          "B) To provide a way to style HTML elements",
          "C) To handle asynchronous operations and execute code after a certain task is completed",
          "D) To define CSS rules for a webpage"
        ],
        answer: 2
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        choices: ["A) +", "B) &", "C) -", "D) *"],
        answer: 0
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        choices: [
            "A) They are interchangeable and can be used interchangeably", 
            "B) 'null' represents an uninitialized variable, while 'undefined' indicates the absence of a value or an uninitialized variable", 
            "C) 'undefined' represents an empty string, while 'null' indicates a missing function", 
            "D) 'null' is used for mathematical calculations, while 'undefined' is used for logical operations"
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
let score = 94;

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
    updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const timerValueElement = document.getElementById("timerValue");
    timerValueElement.textContent = timeLeft;
}

function showQuestion(){
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        choicesElement.innerHTML = "";

    for (let index = 0; index < question.choices.length; index++) {
        const choice = question.choices[index];
      
        const choiceItem = document.createElement("li");
        const choiceButton = document.createElement("button");
      
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function(clickIndex) {
            return function() {
            checkAnswer(clickIndex);
            };
        }(index));
      
        choiceItem.appendChild(choiceButton);
        choicesElement.appendChild(choiceItem);
        }
    } 
    else {
        endQuiz();
    }
}

function checkAnswer(selectedIndex){
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.answer) {
      score++;
      currentQuestionIndex++;
      showQuestion();
      showFeedback("Correct!", "green");
    } else{ 
        timeLeft-= 10;
        const feedbackElement = document.createElement("p");
        feedbackElement.textContent = "Wrong! -10 secs";
        feedbackElement.style.color = "red";

        choicesElement.appendChild(feedbackElement);
        setTimeout(function() {
            feedbackElement.remove();
        },1000)
    }
}

function showFeedback(message,color){
    const feedbackElement = document.createElement("p");
    feedbackElement.textContent = message;
    feedbackElement.style.color = color;

    choicesElement.appendChild(feedbackElement);
    setTimeout(function() {
        feedbackElement.remove();
    },1000);
}

function showExplosionAndEndQuiz(){
    clearInterval(timerInterval);
    timeLeft = 0;
    updateTimerDisplay();
    const explosionImage = document.getElementById("explosionImage");
    explosionImage.style.display = "block";

    setTimeout(function() {
        explosionImage.style.display = "none";
        endQuiz();
    },5000);
}

function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    scoreElement.textContent = score;
}

submitBtn.addEventListener("click", function() {
    const initials = initialsElement.value;
    if (initials) {
        saveHighScore(initials, score);
        initialsElement.value = "";
        window.location.href = "highscores.html";
        showHighScores();
    }
});

const viewHighScoresLink = document.getElementById("viewHighScores");
viewHighScoresLink.addEventListener("click", function() {
  showHighScores();
});

function saveHighScore(initials, score) {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials: initials, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const highScoresContainer = document.getElementById("highScoresContainer");
    highScoresContainer.innerHTML = "";
    highScores.forEach(function(scoreData) {
        const scoreItem = document.createElement("div");
        scoreItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
        highScoresContainer.appendChild(scoreItem);
    });
}