//Задание 1
for (let index = 0; index < 2; index++) {
    console.log('Привет!');        
}

//Задание 2
for (let index = 1; index <= 5; index++) {
    console.log(index);        
}

//Задание 3
for (let index = 7; index <= 22; index++) {
    console.log(index);        
}

//Задание 4
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]} $`);
}


//Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    console.log(n);
    num++
}

console.log(num);

//Задание 6

let friday = 2;
let month = 31;

for (let index = friday; index <= month; index += 7) {
    console.log(`Сегодня пятница, ${index}-е число. Необходимо подготовить отчет.`);
}