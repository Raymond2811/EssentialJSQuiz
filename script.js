const timeEl = document.querySelector('.time');
const mainEl = document.getElementById('bomb');

let secondsLeft = 81

function setTime() {
    const timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    },1000);
}

function sendMessage() {
    timeEl.textContent = ' ';
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'assets/images/explosion.jpeg')
    mainEl.appendChild(imgEl)
}

setTime();