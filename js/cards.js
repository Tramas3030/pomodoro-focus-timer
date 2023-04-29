const forest = document.querySelector('.forest');
const rain = document.querySelector('.rain');
const coffe = document.querySelector('.coffe');
const fireplace = document.querySelector('.fireplace');

const forestSound = new Audio("sounds/Floresta.wav");
const coffeSound = new Audio("sounds/Cafeteria.wav");
const rainSound = new Audio("sounds/Chuva.wav");
const fireplaceSound = new Audio("sounds/FFWF.wav");
const audios = [forestSound, coffeSound, rainSound, fireplaceSound];

let isCardActivate = false;


function activateCard(card) {
    const cards = document.querySelectorAll('.cards button');

    cards.forEach((crd) => crd.classList.remove("activated"));
    card.classList.add("activated");
}

function playAudio(audio) {
    audios.forEach((a) => {
        if(a !== audio) {
            a.pause();
        }
    });
    
    audio.play();
    audio.loop = true;
}

function forestActivated() {
    if(isCardActivate) {
        forest.classList.remove("activated");
        isCardActivate = false;
        forestSound.pause();
        return;
    }

    activateCard(forest);
    isCardActivate = true;
    playAudio(forestSound);
}

function rainActivated() {
    if(isCardActivate) {
        rain.classList.remove("activated");
        isCardActivate = false;
        rainSound.pause();
        return;
    }

    activateCard(rain);
    isCardActivate = true;
    playAudio(rainSound);
}

function coffeActivated() {
    if(isCardActivate) {
        coffe.classList.remove("activated");
        isCardActivate = false;
        coffeSound.pause();
        return;
    }

    activateCard(coffe);
    isCardActivate = true;
    playAudio(coffeSound);
}

function fireplaceActivated() {
    if(isCardActivate) {
        fireplace.classList.remove("activated");
        isCardActivate = false;
        fireplaceSound.pause();
        return;
    }

    activateCard(fireplace);
    isCardActivate = true;
    playAudio(fireplaceSound);
}

export {
    forest,
    rain,
    coffe,
    fireplace,
    forestActivated,
    rainActivated,
    coffeActivated,
    fireplaceActivated
}