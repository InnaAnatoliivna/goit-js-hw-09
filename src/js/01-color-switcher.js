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

buttonStart.addEventListener('click', onStartChangeBackgroundColor);
buttonStop.addEventListener('click', onStopChangeBackgroundColor);


//function for used in handlers
function startIntervalChanges() {
    intervalChangeBackgroundColor = setInterval(onStartChangeBackgroundColor, 1000)
};
function stopIntervalChanges() {
    clearInterval(intervalChangeBackgroundColor);
};


//function - handler
function onStartChangeBackgroundColor() {

    startIntervalChanges();

    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    
    buttonStart.disabled = true;
    buttonStop.disabled = false;
};

function onStopChangeBackgroundColor() {
    stopIntervalChanges();

    buttonStart.disabled = false;
    buttonStop.disabled = true;
};



