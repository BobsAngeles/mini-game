//1

const btnEL = document.querySelector('.btn');
const titleEL = document.querySelector('.title');


btnEL.addEventListener('click', () => {
    titleEL.classList.toggle('title__none');
    btnEL.textContent = titleEL.classList.contains('title__none')? 'Показать заголовок' : 'Скрыть заголовок';
})

//2

const btn2EL = document.querySelector('.btn2');
const textEL = document.querySelector('.text');


btn2EL.addEventListener('click', () => {
    textEL.style.color = 'darkblue';
})

//3
const btn3EL = document.querySelector('.btn3');
const title3EL = document.querySelector('.title3');


btn3EL.addEventListener('click', () => {
    title3EL.textContent = 'Привет, мир!';
})

//4

const text4EL = document.querySelectorAll('.description');

text4EL.forEach(element => {
    element.textContent = 'Измененный текст';
});

//5

const text5EL = document.querySelectorAll('.text-description');

text5EL.forEach(element => {
    element.textContent = 'Новый текст';
});


//6

const btn6EL = document.querySelector('.btn6');

btn6EL.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
})

//7
const btn7EL = document.querySelector('.btn7');
const textDescriptionsEL = document.querySelector('.text-descriptions');

btn7EL.addEventListener('click', () => {
    textDescriptionsEL.remove()
})


