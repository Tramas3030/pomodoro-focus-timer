const body = document.querySelector('body');
const chronometer = document.querySelector('.timer');
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");

import {
    buttonPlay,
    buttonPause,
    buttonIncreased,
    buttonDecreased,
    buttonPlayDM,
    buttonPauseDM,
    buttonIncreasedDM,
    buttonDecreasedDM,
    buttonLightMode,
    buttonDarkMode
} from "./buttons.js";

import {
    countdown,
    hold,
    increaseTimer,
    decreaseTimer,
    isCountdownRunning,
    setIsCountdownRunning
} from "./timer.js";

import {
    forest,
    rain,
    coffe,
    fireplace,
    forestActivated,
    rainActivated,
    coffeActivated,
    fireplaceActivated
} from "./cards.js";

buttonLightMode.addEventListener('click', switchMode);
buttonDarkMode.addEventListener('click', switchMode);

buttonPlay.addEventListener('click', () => {
    buttonPress();
    if(!isCountdownRunning) {
        countdown();
        setIsCountdownRunning(true);
    }
});
buttonPause.addEventListener('click', hold);
buttonIncreased.addEventListener('click', increaseTimer);
buttonDecreased.addEventListener('click', decreaseTimer);

buttonPlayDM.addEventListener('click', () => {
    buttonPress();
    if(!isCountdownRunning) {
        countdown();
        setIsCountdownRunning(true);
    }
});
buttonPauseDM.addEventListener('click', hold);
buttonIncreasedDM.addEventListener('click', increaseTimer);
buttonDecreasedDM.addEventListener('click', decreaseTimer);

forest.addEventListener('click', forestActivated);
rain.addEventListener('click', rainActivated);
coffe.addEventListener('click', coffeActivated);
fireplace.addEventListener('click', fireplaceActivated);

function switchMode() {
    buttonLightMode.classList.toggle("hide");
    buttonDarkMode.classList.toggle("hide");

    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
    buttonIncreased.classList.toggle("hide");
    buttonDecreased.classList.toggle("hide");

    buttonPlayDM.classList.toggle("hide");
    buttonPauseDM.classList.toggle("hide");
    buttonIncreasedDM.classList.toggle("hide");
    buttonDecreasedDM.classList.toggle("hide");

    body.classList.toggle("dark-mode");
    chronometer.classList.toggle("dark-mode-timer");
}

export function buttonPress() {
    buttonPressAudio.play();
}
