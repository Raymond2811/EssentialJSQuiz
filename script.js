const timeEl = document.querySelector('.time');
const mainEl = document.getElementById('bomb');

const startButton = document.getElementById('startButton');
const questionContainer =document.getElementById('questionContainer');
const questionEl = document.getElementById('question');
const answerButtons = document.querySelectorAll('#questionContainer button');
const quizTitle = document.getElementById('quizTitle')
const quizDescription = document.getElementById('quizDescription')


 let secondsLeft = 3

function setTime() {
    const timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = 'Time:' + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            showExplosion();
        }
    },1000);
}

function showExplosion() {
    removeAllElements();

    timeEl.textContent = '';
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'assets/images/explosion.jpeg');
    imgEl.style.top = '0';
    imgEl.style.left = '0';
    imgEl.style.width = '100vw';
    imgEl.style.height = '100vh';
    imgEl.style.zIndex = '9999'; 
    document.body.appendChild(imgEl)
}

function removeAllElements() {
    document.body.innerHTML = '';
}
 
let currentQuestionIndex = 0;

const questions  = [
    {
        question: "what is....",
        answers:[
            {text: 'adf', correct:true},
            {text: 'jhg', correct:false},
            {text: 'poi', correct:false},
            {text: 'qwe', correct:false},
        ]

    },

    {
        question:"why is ....",
        answers:[
            {text:'bnm', correct:false},
            {text:'hjk', correct:false},
            {text:'tgb', correct:true},
            {text:'plk', correct:false},
        ]
    },

    {
        question:"why is ....",
        answers:[
            {text:'wsz', correct:false},
            {text:'cvg', correct:false},
            {text:'cvb', correct:false},
            {text:'qsd', correct:true},
        ]
    },

    {
        question:"why is ....",
        answers:[
            {text:'qwe', correct:false},
            {text:'edc', correct:false},
            {text:'lkn', correct:true},
            {text:'vhp', correct:false},
        ]
    },

    {
        question:"why is ....",
        answers:[
            {text:'gyh', correct:true},
            {text:'loi', correct:false},
            {text:'bgv', correct:false},
            {text:'mjn', correct:false},
        ]
    },
    //future questions
];

startButton.addEventListener('click',startQuiz);

function startQuiz(){
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    quizDescription.classList.add('hidden');
    quizTitle.classList.add('hidden');
    setTime();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.textContent = question.question;
    answerButtons.forEach(function(button,index) {
        button.textContent = question.answers[index].text;
        button.addEventListener('click',function(){
            selectAnswer(question.answers[index]);
        });
    });
}

