//1 
let string = 'js';
string = string.toUpperCase()
console.log(string);

//2
function newArr(arr, str) {
    const strNew = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(strNew));

}
console.log(newArr(['hi just', 'HI do', 'it', 'have hi', 'a', 'nice', 'hiday'], 'hi'))
 
//3

let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//5
function randomNumber() {
return Math.floor(Math.random() * 10) +1;
}
console.log(randomNumber());

//6

function getRandomNumber(number) {
    let randomNumberArr = [];
    for (let num = 0; randomNumberArr.length < (number/2); num++) {
        randomNumberArr.push(Math.floor(Math.random() * number));
    }
    return randomNumberArr;
}

console.log(getRandomNumber(12));

//7

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandom(10, 12));

//8

console.log(new Date());

//9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//10
function fullDate (myDate) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];   
    const seconds = myDate.getSeconds();
    const minutes = myDate.getMinutes();
    const hours = myDate.getHours();
    const day = myDate.getDate();
    const dayWeek = days[myDate.getDay()];
    const month = myDate.getMonth();
    const year = myDate.getFullYear();

    return `
    Дата: ${day} ${months[month]} ${year} г. - это ${dayWeek}.
    Время: ${hours}:${minutes}:${seconds}`;

}
console.log(fullDate(new Date()));
