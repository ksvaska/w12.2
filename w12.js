const button = document.querySelector('.btn');
const result = document.querySelector('.result');

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

const alphLength = alphabet.length;
console.log(alphLength);//33

const one = Math.floor(Math.random() * alphLength);
const two = Math.floor(Math.random() * alphLength);
const three = Math.floor(Math.random()* alphLength);
const four = Math.floor(Math.random() * alphLength);

const word =() =>{
result.textContent = alphabet[one]+alphabet[two]+alphabet[three]+alphabet[four];
}

button.addEventListener('click',word);



