const place = document.getElementById('place');
const characters = ['👻', '👾', '👽', '🤖', '👹', '😈'];

function addRandomCharacters(event) {
    const target = this.getBoundingClientRect();
    
    let randomInt = Math.floor( Math.random() * ((characters.length - 1) - 0 + 1) - 0 );
    let randomScale = Math.random() * (2 - 0.5) + 0.5;
    let randomRotate = Math.floor( Math.random() * (180 - 10) + 10 );

    const span = document.createElement('span');
    span.innerHTML = characters[randomInt];
    place.appendChild(span);

    let x = event.clientX - target.left - (span.offsetWidth / 2) + 'px';
    let y = event.clientY - target.top - (span.offsetHeight / 2)  + 'px';
    
    span.style.position = 'absolute';
    span.style.left = x;
    span.style.top = y;
    span.style.transform = (`
                            scale(${randomScale})
                            scale(${randomScale + deg})
                            rotate(${randomRotate + 'deg'})
                            rotate(${randomRotate})
                        `);
}

place.addEventListener('click', addRandomCharacters);