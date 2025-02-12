//задание 1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
  
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

// 2

function isOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное'
    } else {
        return 'Число нечетное'
      }
}

console.log(isOdd(4));
console.log(isOdd(11));

//3 
 function square(number) {
    console.log(number ** 2);
 }
 square(6);

 const up = (num) => num ** 2;

 console.log(up(8));

 //4

function userAge () {
    let age = Number(prompt('Сколько тебе лет?'));
    if (isNaN(age)) {
        alert ('Переданный параметр не является числом');
    } else if (age < 0) {
        alert ('Вы ввели неправильно значение');
    } else if (age >=0 && age <=12) {
        alert ('Привет друг');  
    } else {
        alert ('Добро пожаловать');  
    }
}

userAge();

//5 

function calc(k,c) {
    if (isNaN(k) || isNaN(c)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return k * c;
    }
}

console.log(calc(3,5));
console.log(calc('Hi',5));

//6 

function checkNumber() {
    let num = prompt('Введите число');
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';        
    } else {
        return `${num} в кубе равняется ${Math.pow(num, 3)}`;
    }
}

console.log(checkNumber());

//7 
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circleOne = {
    radius: 33,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circleTwo = {
    radius: 55,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

console.log(circleOne.methodGetArea());
console.log(circleTwo.methodGetArea());
