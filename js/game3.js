function reverseWord() {
    let word = prompt('Введите слово:');
    if (isNaN(word)) {
        reversedWord = word.split('').reverse().join('');
        alert(reversedWord);
    } else {
        alert('Вы ввели не слово');
    }
}

const button = document.querySelector('#btnGame3');
button.addEventListener('click', reverseWord);

