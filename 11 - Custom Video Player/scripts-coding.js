function play() {
    if (video.paused) {
        video.play();
        toggle.innerText = '\u23F8';
    } else {
        video.pause();
        toggle.innerText = '\u25B6';
    }
}

function timeStamp(e) {
    video.currentTime = (e.offsetX / bar.offsetWidth) * video.duration;
}

function skip() {
    video.currentTime += parseInt(this.dataset.skip, 10);
    if (video.currentTime < 0) {
        video.currentTime = 0;
    }
    if (video.currentTime > video.duration) {
        video.currentTime = video.duration;
    }
}

function updateBar() {
    const ratio = video.currentTime / video.duration * 100;
    progress.style['flex-basis'] = `${ratio}%`;
}

function setVideoAttr() {
    video[this.name] = this.value;
}

const video = document.querySelector('.player__video');
video.addEventListener('click', play);
video.addEventListener('timeupdate', updateBar);

const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', play);

const skips = document.querySelectorAll('button[data-skip]');
skips.forEach(btn => btn.addEventListener('click', skip));

const bar = document.querySelector('.progress');
const progress = document.querySelector('.progress__filled');
let mousedown = false;
bar.addEventListener('click', timeStamp);
bar.addEventListener('mousemove', (e) => mousedown && timeStamp(e));
bar.addEventListener('mousedown', () => mousedown = true);
bar.addEventListener('mouseup', () => mousedown = false);


const slides = document.querySelectorAll('.player__slider');
slides.forEach(btn => btn.addEventListener('change', setVideoAttr));

/*
const volume = document.querySelector('input[name="volume"]');
volume.addEventListener('change', function() {
    video.volume = this.value;
}); // 如用arrow function，this.value会是undefined
*/
