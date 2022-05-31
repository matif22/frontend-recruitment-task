const alertOpenButton = document.querySelector('.alert-open-button');
const alertCloseButton = document.querySelector('.alert-close-button');
const alertOverlayEl = document.querySelector('.overlay');
const counterEl = document.querySelector('.counter')

let counter = 0;

alertOpenButton.addEventListener('click', () => {
    const alert = document.querySelector('.alert');

    openAlert(alert);
});

alertCloseButton.addEventListener('click', () => {
    const alert = document.querySelector('.alert');

    closeAlert(alert);
});

const openAlert = (alert) => {
    counter = counter + 1
    alert.classList.add('active');
    alertOverlayEl.classList.add('active');
    counterEl.innerHTML = counter;
    localStorage.setItem('counter', counter);
    if (counter > 5) {
        
    }
};

const closeAlert = (alert) => {
    alert.classList.remove('active');
    alertOverlayEl.classList.remove('active');
};

 if (localStorage.getItem('counter')) {
    counter = +localStorage.getItem('counter');
    console.log(typeof counter)
};

