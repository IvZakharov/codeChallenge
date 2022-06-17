const place = document.getElementById('place');
const characters = ['👻', '👾', '👽', '🤖', '👹', '😈'];
let interval = 300;
let counter = 0;

let addRandomCharacters = setInterval(function(){ 
    
    let placeWidth = place.clientWidth;
    placeWidth += 1000;

    let randomX = Math.floor( Math.random() * (placeWidth - 1) + 1 );
    let randomY = Math.floor( Math.random() * (300 - 1) + 1 );
    
    const span = document.createElement('span');
    span.innerHTML = characters[counter];
    place.appendChild(span);
    
    span.style.position = 'absolute';
    span.style.position = 'relative';
    span.style.left = randomX + "px";
    span.style.top = randomY + "px";

    counter++;

    if(counter === characters.length) {
        counter = 0;
    }

}, interval);
