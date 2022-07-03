const numbers = [1, -3, 6, 9, -18, 22, -81, 38, -2, -15];

let countPositive = (array) => {
    let count = 0;
    
    array.forEach(elem => {
        if (elem > 0) {
            count ++
        }
        count ++;
    });

    return count
};

document.getElementById('positive').innerHTML = countPositive(numbers);