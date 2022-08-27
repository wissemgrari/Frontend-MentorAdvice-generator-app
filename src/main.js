const API_URL = 'https://api.adviceslip.com/advice';

let btn = document.getElementById('btn');
let advice_id = document.getElementById('advice_id');
let advice_msg = document.getElementById('advice_msg');

const fetchAdvice = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      let { id, advice } = data.slip;
      advice_id.innerHTML = id;
      advice_msg.innerHTML = advice;
    });
};

btn.addEventListener('click', fetchAdvice);

window.onload = fetchAdvice();
