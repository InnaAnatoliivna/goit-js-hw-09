// Напиши скрипт, який після натискання кнопки «Start», раз на 
// секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» 
//     зміна кольору фону повинна зупинятися.

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalChangeBackgroundColor;

buttonStop.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


//function for used in handlers
function onStartChangeBackgroundColor() {
    intervalChangeBackgroundColor = setInterval(changeBackgroundColor, 1000);
};
function onStopChangeBackgroundColor() {
    clearInterval(intervalChangeBackgroundColor);
};


//function for change bc with an interval
function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
};


//events on btn
buttonStart.addEventListener('click', () => {
    onStartChangeBackgroundColor();

    buttonStart.disabled = true;
    buttonStop.disabled = false;
});

buttonStop.addEventListener('click', () => {
    onStopChangeBackgroundColor();

    buttonStart.disabled = false;
    buttonStop.disabled = true;
});
