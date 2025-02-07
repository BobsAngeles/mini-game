let numberOfSecret = Math.floor(Math.random() * 100) +1;

let numberOfGuess = 0;

const maxGuess = 10;

let guesses = document.getElementById('guesses');

function checkGuess() {
    let guess = parseInt(document.getElementById('input').value);
    numberOfGuess ++;
    if (numberOfGuess === 1) {
        guesses.textContent = 'Выши прошлые попытки: ';
    }
        guesses.textContent += guess + ',' + ' ';

    if (guess == numberOfSecret) {
        alert('Поздравляем! Вы угадали число')

        document.getElementById('input').disabled = true

        document.getElementById('message').textContent = ''


    } else if (guess < numberOfSecret) {
        document.getElementById('message').textContent = 'Ваше число меньше загаданного. Попробуйте снова';
    } else {
        document.getElementById('message').textContent = 'Ваше число больше загаданного. Попробуйте снова';
    }

    if (numberOfGuess >= maxGuess && guess != numberOfSecret) {
        alert('Не фортануло, не повезло');
        document.getElementById('input').disabled = true
        document.getElementById('message').textContent = ''
    }

}

function restartGame() {
    numberOfSecret = Math.floor(Math.random() * 100) +1;
    numberOfGuess = 0;
    document.getElementById('input').value = '';
    document.getElementById('input').disabled = false;
    document.getElementById('message').textContent = '';
    guesses.textContent = '';

}