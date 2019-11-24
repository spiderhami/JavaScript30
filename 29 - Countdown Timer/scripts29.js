const title = document.querySelector('title');
const quickEvents = document.querySelectorAll('.timer__button');
const form = document.getElementById('custom');
const input = form.querySelector('input');
const counting = document.querySelector('.display__time-left');
const comeback = document.querySelector('.display__end-time');
let timerID;

function handleSubmit(e) {
    const val = input.value;
    this.reset();

    e.preventDefault();
    if (/\D/.test(val)) {
        return;
    }

    readyToCountdown(parseFloat(val) * 60);
}

function handleClick() {
    readyToCountdown(parseFloat(this.dataset.time));
}

function readyToCountdown(seconds) {
    const laterTimeStamp = Date.now() + seconds * 1000;
    
    clearTimeout(timerID); // It's fine timerID undefined
    countdown(seconds, laterTimeStamp);
    displayBackTime(laterTimeStamp);
}

function countdown(secondsLeft, laterTimeStamp) {
    if (secondsLeft >= 0) {
        displayTimeLeft(secondsLeft);
        timerID = setTimeout(() => {
            secondsLeft = Math.round((laterTimeStamp - Date.now()) / 1000);
            countdown(secondsLeft, laterTimeStamp);
        }, 1000);
    }
}

function displayTimeLeft(secondsLeft) {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    counting.innerText = `${mins}:${secs<10 ? '0' : ''}${secs}`;
    title.innerText = counting.innerText;
}

function displayBackTime(laterTimeStamp) {
    const time = new Date(laterTimeStamp);
    const [hours, mins] = [time.getHours(), time.getMinutes()];
    comeback.innerText = `Be Back At ${hours}:${(mins<10 ? '0' : '')}${mins}`;
}


form.addEventListener('submit', handleSubmit);
quickEvents.forEach(e => e.addEventListener('click', handleClick));
