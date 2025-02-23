function startQuiz() {

    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },  
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const item = quiz[i];
        let puzzel = item.question + "\n";        
        for (let j = 0; j < item.options.length; j++) {
            puzzel += item.options[j] + "\n";
        }
        const userAnswer = prompt("Введите номер верного ответа" + puzzel);        
        if (parseInt(userAnswer) === item.correctAnswer) {
            score++;
        }   
    }
    alert(`Вы дали ${score} верных ответа из ${quiz.length} вопросов`);
}

