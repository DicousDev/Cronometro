const oneMinutes = 60;
const miliseconds = 1000;
var seconds = 0;

var time = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

let timePiece;
let isTime = false;

function showTime() {
    const timerTitle = document.getElementById("time");
    const hours = (time.hours >= 10) ? time.hours.toString() : `0${time.hours}` 
    const minutes = (time.minutes >= 10) ? time.minutes.toString() : `0${time.minutes}` 
    const seconds = (time.seconds >= 10) ? time.seconds.toString() : `0${time.seconds}` 
    timerTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function initTime() {
    
    if(!isTime)
    {
        isTime = true;
        timePiece = setInterval(() => { timer(); }, miliseconds);
    }
}

function pauseTime() {
    clearInterval(timePiece);
    isTime = false;
}

function stopTime() {
    clearInterval(timePiece);
    isTime = false;
    seconds = 0;
    time.hours = 0;
    time.minutes = 0;
    time.seconds = 0;
    showTime();
}

function timer() {
    seconds += 1;

    // Calcula horas, minutos e segundos
    time.hours = Math.floor(seconds / oneMinutes / oneMinutes);
    time.minutes = Math.floor(seconds / oneMinutes) % oneMinutes;
    time.seconds = seconds % oneMinutes;
    showTime();
}