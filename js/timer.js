let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let resetMinutes = Number(minutesDisplay.textContent);
let timerTimeOut; // declarando a variável timerTimeOut no escopo global
let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);
let isCountdownRunning = false;

import { buttonPress } from "./main.js";

function setIsCountdownRunning(value) {
    isCountdownRunning = value;
}

//funções para o cronômetro
function countdown() {
    timerTimeOut = setTimeout(function(){

        updateDisplay(minutes, seconds);

        if(minutes <= 0 && seconds <= 0) {
            reset();
            return;
        }

        if(seconds <= 0) {
            seconds = 60;
            --minutes;
        }

        --seconds;

        updateDisplay(minutes, seconds);

        countdown();

    }, 1000);
}

function clearTimerTimeOut() {
    clearTimeout(timerTimeOut);
    setIsCountdownRunning(false);
}

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function reset() {
    alert("caso deseja continuar o ciclo do pomodoro, coloque o tempo que você deseja");
    clearTimerTimeOut();
}

function hold() {
    buttonPress();
    clearTimerTimeOut();
}

function increaseTimer() {
    buttonPress();
    minutes = Number(minutesDisplay.textContent);
    if(minutes + 5 > 90) {
        alert("O tempo máximo é de 90 minutos");
        return;
    }
    minutes += 5;
    seconds = 0;
    updateDisplay(minutes, 0);
    resetMinutes = minutes;
}

function decreaseTimer() {
    buttonPress();
    minutes = Number(minutesDisplay.textContent);
    if(minutes - 5 < 0) {
        alert("Não é possível reduzir o cronômetro para menos que 0");
        return;
    }
    minutes -= 5;
    seconds = 0;
    updateDisplay(minutes, 0);
    resetMinutes = minutes;
}

export {
    countdown,
    hold,
    increaseTimer,
    decreaseTimer, 
    isCountdownRunning,
    setIsCountdownRunning
}