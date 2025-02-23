//1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) break;
}

//2 
console.log(arr.indexOf(4));

//3

let arr3 = [1, 3, 5, 10, 20];
arr3 = arr3.join(' ');
console.log(arr3);

//4

const multiArr = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let j = 0; j < 3; j++) {
        arr2.push(1);
    }
    multiArr.push(arr2);
}

console.log(multiArr);

//5

const pushArr = [1, 1, 1];
pushArr.push(2, 2, 2);
console.log(pushArr);

//6 

let sortArr = [9, 8, 7, 'a', 6, 5]; 

sortArr = sortArr.sort().filter(item => item !== 'a');
console.log(sortArr);

//7

const arr7 = [9, 8, 7, 6, 5]; 

let guess = +prompt('Введите число');

if (arr7.includes(guess)) {
    alert('Угадал');
}
 else {
    alert('Не угадал');
}

//8

let letterLine = 'abcdef';
letterLine = letterLine.split('').reverse().join('');
console.log(letterLine);

//9

const arr9 = [
    [1, 2, 3],
    [4, 5, 6],
 ];

const arr9New = arr9.flat();
console.log(arr9New);

 //10

const arrSum = [10,8,6,4,2,1,3,5,7,9];
for (let i = 0; i < arrSum.length; i++)  {
    if (arrSum[i+1]) {
        console.log(arrSum[i] + arrSum[i+1]);
    }   
}

//11
function square(arr11) {
    return arr11.map(item => item ** 2);
}

console.log(square([1, 2, 3, 4, 5]));

//12

function getLenght(arr12) {
    return arr12.map(item => item.length);
}

console.log(getLenght(['just', 'do', 'it']));


//13

function numbers(arr13) {
    return arr13.filter(item => item < 0);
}

console.log(numbers([-10,8,6,-4,2,1,-3,5,7,-0.9,0]));

//14 
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const arr14 = [];

for (let i = 0; i < 10; i++)  {
    arr14.push(randomNumber());
}

console.log(arr14);

const evenArr = [];

for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 === 0) {
        evenArr.push(arr14[i]);
    }
} 

console.log(evenArr);

//15

function randomNumbers() {
    return Math.floor(Math.random() * 10);
}

const arr15 = [];

for (let i = 0; i < 6; i++)  {
    arr15.push(randomNumbers());
}

console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);

