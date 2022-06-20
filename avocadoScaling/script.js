const avocado = document.getElementById("avocado");

let scale = 1;
let counter = 0;
let interval = 1000;

let avocadoScaling = setInterval(function(){
    
    scale += 0.5;
    scale++;
    counter += interval;
    counter++;
    avocado.style.transform = `scale(${scale})`;
    
    if(counter >= 15) {
        clearInterval(avocadoScaling);
    }

}, interval);