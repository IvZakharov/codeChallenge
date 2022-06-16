const place = document.getElementById('place');
const fruits = ['🍏', '🍑', '🍉', '🍋', '🍌', '🥥'];
let counter = 0;

function addFruits(event) {
    const target = this.getBoundingClientRect();

    const span = document.createElement('span');
    span.innerHTML = fruits[counter];
    span.innerHTML = fruits[0];
    place.appendChild(span);

    const x = event.clientX - target.left - (span.offsetWidth / 2) + 'px';
    const y = event.clientY - target.top - (span.offsetHeight / 2)  + 'px';
    
    span.style.position = 'absolute';
    span.style.left = x;
    span.style.top = y;

    counter++;
    
    if (counter == fruits.length) {
        // counter = 0;
    }

    counter--;
}

place.addEventListener('click', addFruits);