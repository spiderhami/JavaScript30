const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('button');
let gameLength = 10; // seconds
let score,
    isTimeup,
    isWhacked, // check if the mole has been whacked in this appearance
    lastMole;

function startGame() {
    startBtn.disabled = true;
    isTimeup = false;
    score = 0;
    scoreBoard.innerText = score;
    setTimeout(() => {
        isTimeup = true;
        startBtn.disabled = false;
    }, gameLength * 1000);
    game();
}

function game() {
    isWhacked = false;
    const moleID = randNumber(0, moles.length);
    holes[moleID].classList.add('up');
    // two 400 below is because we want the transition complete,
    // and transition duration was set to 0.4s.
    setTimeout(() => {
        holes[moleID].classList.remove('up');
        lastMole = moleID;
        if (!isTimeup) {
            sleep(400).then(() => {game();});
        }
    }, randNumber(400, 800));
}

// Copy from online
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function tally() {
    if (!isWhacked) {
        score++;
        scoreBoard.innerText = score;
    }
    isWhacked = true;
}

function randNumber(down, upper) {
    return Math.floor((upper - down) * Math.random() + down);
}


moles.forEach(mole => mole.addEventListener('click', tally));
