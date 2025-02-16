let index = 0;
function mathTask() {
    let task = document.getElementById('task');
    let number1 = Math.floor(Math.random() * 100) +1;
    let number2 = Math.floor(Math.random() * 100) +1;
    const operationArr = ['*', '+', '-', '/'];    
    let randomIndex = operationArr[Math.floor(Math.random() * operationArr.length)];
    task.textContent = number1 + ' ' + randomIndex + ' ' + number2 + ' =';
    let indexSing = Number(operationArr.indexOf(randomIndex));
    if (indexSing === 0) {
        rightAnswer = number1 * number2;
        document.getElementById('messageRight').textContent = '';
        document.getElementById('guessesWrong').textContent = '';
        document.getElementById('input').value = '';

    } else if (indexSing === 1) {
        rightAnswer = number1 + number2;
        document.getElementById('messageRight').textContent = '';
        document.getElementById('guessesWrong').textContent = '';
        document.getElementById('input').value = '';

    } else if (indexSing === 2) {
        rightAnswer = number1 - number2;
        document.getElementById('messageRight').textContent = '';
        document.getElementById('guessesWrong').textContent = '';
        document.getElementById('input').value = '';

    } else {
        rightAnswer = Math.round((number1 / number2) * 10) / 10;
        messageRight.textContent = '';
        guessesWrong.textContent = '';
        document.getElementById('input').value = '';
    }

    return rightAnswer;
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById('input').value);
        if (userAnswer === rightAnswer) {
        document.getElementById('messageRight').textContent = 'Верное решение';
    } else {
        document.getElementById('guessesWrong').textContent = 'Неверное решение';
    }
}