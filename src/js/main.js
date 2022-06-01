const alertOpenButton = document.querySelector('.alert-open-button');
const alertCloseButton = document.querySelector('.alert-close-button');
const alertOverlayEl = document.querySelector('.overlay');
const counterEl = document.querySelector('.counter');
const alert = document.querySelector('.alert');
const resetButton = document.querySelector('.reset-button');

let counter = 0;

alertOpenButton.addEventListener('click', () => {
    openAlert(alert);
});

alertCloseButton.addEventListener('click', () => {
    closeAlert(alert);
});

alertOverlayEl.addEventListener('click', () => {
    closeAlert(alert);
});

resetButton.addEventListener('click', () => {
    resetCounter();
});

const incrementCounter = () => {
    counter += 1;
    counterEl.innerHTML = counter;
}

const openAlert =  (alert) => {
    incrementCounter();
    alert.classList.add('active');
    alertOverlayEl.classList.add('active');
    localStorage.setItem('counter', counter);
    if (counter > 5) {
        resetButton.classList.add('active');
    };
};

const closeAlert = (alert) => {
    alert.classList.remove('active');
    alertOverlayEl.classList.remove('active');
};

const resetCounter = () => {
    localStorage.removeItem('counter');
    counter = 0;
    counterEl.innerHTML = counter;
    resetButton.classList.remove('active');
};

if (localStorage.getItem('counter')) {
    counter = +localStorage.getItem('counter');
};