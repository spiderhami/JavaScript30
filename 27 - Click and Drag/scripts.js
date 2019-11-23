const area = document.querySelector('.items');
let isMouseDown = false;
let mouseX = 0;

function drag(e) {
    if (!isMouseDown) {
        return;
    }
    const distance = (mouseX - e.x) * 3;
    this.scrollBy(distance, 0);
    mouseX = e.x;
}

function handleDown(e) {
    isMouseDown = true;
    mouseX = e.x;
    this.classList.add('active');
}

function handleEnd() {
    isMouseDown = false;
    this.classList.remove('active');
}


area.addEventListener('mousedown', handleDown);
area.addEventListener('mouseup', handleEnd);
area.addEventListener('mousemove', drag);
area.addEventListener('mouseleave', handleEnd);
