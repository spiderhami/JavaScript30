const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const [rateMin, rateMax] = [0.40, 4.00];

function handler(e) {
    const percent = e.offsetY / this.offsetHeight;
    speedBar.style.height = `${percent * 100}%`;

    const rate = ((rateMax - rateMin) * percent + rateMin).toFixed(2); // type string
    video.playbackRate = rate;
    speedBar.innerText = rate + 'x';
}


speed.addEventListener('mousemove', handler);
