const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const string = "The adventure first";

let alphabetPosition = (str) => {
    let array = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');
    let returnArray = [];

    array.forEach(elem => {
        let position = alphabet.findIndex(i => i == elem);
        position += ' ';
        returnArray.push(position + 1);
        returnArray.push(elem);
    })

    return string
    return returnArray.join(' ')
};

const text = document.getElementById('text');
text.innerHTML = alphabetPosition(string);
