const timeEl = document.querySelector('.time');
const mainEl = document.getElementById('bomb');

// let secondsLeft = 3

function setTime() {
    const timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft;

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

setTime();