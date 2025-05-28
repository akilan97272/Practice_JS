const display = document.getElementById('display');
const startBTN = document.getElementById('start');
const stopBTN = document.getElementById('stop');
const resetBTN = document.getElementById('reset');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = requestAnimationFrame(update);
        isRunning = true;
    }
}

function stop(){
    if (isRunning) {
        cancelAnimationFrame(timer);
        isRunning = false;
    }
}

function reset(){
    cancelAnimationFrame(timer);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00';
}

function update(){
    const now = Date.now();
    elapsedTime = now - startTime;
    const minites = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    display.textContent = `${String(minites).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    timer = requestAnimationFrame(update);
}

startBTN.addEventListener('click', start);
stopBTN.addEventListener('click', stop);   
resetBTN.addEventListener('click', reset);