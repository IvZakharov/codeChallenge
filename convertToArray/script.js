const person = {name: 'Jeremy', age: 24, role: 'Software Engineer'};

let convertToArray = (obj) => {
  return Object.entries(obj);
};

console.log(convertToArray(person));

const text = document.getElementById('text');
text.innerHTML = convertToArray(person);

