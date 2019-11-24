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
    if (timerID) {
        clearTimeout(timerID);
    }
    const seconds = parseFloat(val) * 60;
    countdown(seconds);
    backTime(seconds);
}

function handleClick() {
    const seconds = parseFloat(this.dataset.time);
    if (timerID) {
        clearTimeout(timerID);
    }
    countdown(seconds);
    backTime(seconds);
}

function countdown(set) {
    const minute = Math.floor(set / 60);
    let second = set % 60;
    second = (second > 9) ? second : ('0' + second);
    const time = minute + ':' + second;
    //// title time is slightly slower than counting
    counting.innerText = time;
    title.innerText = time;

    set--;
    if (set >= 0) {
        timerID = setTimeout(function() {countdown(set);}, 1000);
    }
}

function backTime(secondAdded) {
    const now = new Date();
    const [sec, min, hour] = [now.getSeconds(), now.getMinutes(), now.getHours()];
    const minuteAdded = Math.floor((sec + secondAdded) / 60);
    const hourAdded = Math.floor((min + minuteAdded) / 60);

    const backHour = (hour + hourAdded) % 24;
    let backMin = (min + minuteAdded) % 60;
    backMin = (backMin > 9) ? backMin : ('0' + backMin);
    const time = backHour + ':' + backMin;
    comeback.innerText = 'Be Back At ' + time;
}

form.addEventListener('submit', handleSubmit);
quickEvents.forEach(e => e.addEventListener('click', handleClick));
