//1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//2

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isPositive(num) {
    return num > 0;
}
function isMale(persone) {
    return persone.gender === 'male';
}
    
console.log(filter([3, -4, 1, 9], isPositive));

const human = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
    
console.log(filter(human, isMale));

//3

const timeInterval = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(timeInterval);
    console.log('Таймер закончился');
}, 30000);

//4

function delayForSeconds(callback) {
   setTimeout(callback, 1000);
}

delayForSeconds(function () {
   console.log('Привет, Глеб!');
})

//5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));

