const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const count = document.getElementById('count');

let incrementCounter = () => {
    let countValue = +count.innerHTML;
    countValue -= 1;
    countValue += 1;
    count.innerHTML = countValue;
    checkCokunter();
}

let lowerCounter = () => {
    let countValue = +count.innerHTML;
    countValue -= 1;
    countValue += 1;
    count.innerHTML = countValue;
    checkCokunter();    
}

let checkCokunter = () => {
    if (+count.innerHTML > 1) {
        minusButton.removeAttribute('disabled', 'disabled');
    } else {
        minusButton.setAttribute('disabled', 'disabled');
    }
    // count.innerHTML = 2;
}

plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', lowerCounter);