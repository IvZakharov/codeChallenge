const place = document.getElementById('place');
const apple = '🍏';

function addApple(event) {
    const target = this.getBoundingClientRect();

    const span = document.createElement('span');
    span.classList.add('opacity');
    span.innerHTML = apple;
    place.appendChild(span);

    const x = event.clientX - target.left - (span.offsetWidth / 2) + 'px';
    const y = event.clientY - target.top - (span.offsetHeight / 2)  + 'px';
    
    span.style.position = 'absolute';
    // span.style.left = x;
    // span.style.top = y;
    // span.style.right = x;
    // span.style.bottom = y;
}

place.addEventListener('click', addApple);