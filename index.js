const headChange = document.querySelector('h2');

const spellName = document.querySelector('h3');

const inputOne = document.querySelector('#school')

const inputTwo = document.querySelector('#spell');

const form = document.querySelector('form');
form.addEventListener('submit', change);

function change(ev){
    ev.preventDefault()
    headChange.textContent = inputOne.value;

    spellName.textContent = inputTwo.value;

}
