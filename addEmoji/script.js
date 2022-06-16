const place = document.getElementById('place');
const characters = ['👻', '👽', '👾', '🤖', '👹'];

let interval = 1000;
let counter = 0;
counter++;

let charactersPrint = setInterval(function(){
    let span = document.createElement('span');
    span.innerHTML = characters[counter];
    span.style.opacity = counter;
    place.appendChild(span);

    counter++;
    if(counter === characters.length) {
        clearInterval(charactersPrint);
    }
}, interval);