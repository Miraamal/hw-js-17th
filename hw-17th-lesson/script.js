// // function findLowest(a, b) {
//     return a < b ? a : b;
// }

// number1 = 5;
// let number2 = 10;

// let result = findLowest(number1, number2);
// console.log(`lowest number ${number1} и ${number2}: ${result}`);

//===========

// function showEvenNumbers(a, b) {
//     let start, end;

//     if (a > b) {
//         start = a;
//         end = b;
//     } else {
//         start = b;
//         end = a;
//     }

//     for (let i = start; i >= end; i--) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }


// let number1 = 5;
// let number2 = 10;

// showEvenNumbers(number1, number2);

//==================
// function power(base, degree = 2) {
//     let result = 1;

//     for (let i = 0; i < degree; i++) {
//         result *= base;
//     }

//     return result;
// }


// let number = 3;
// let degree = 4;

// let result = power(number, degree);
// console.log(`${number} in degree ${degree} equal ${result}`);

//================
// function sumOfNumbers(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }


// let numberN = 5;

// let result = sumOfNumbers(numberN);
// console.log(`sum of numbers from 1 to ${numberN}: ${result}`);

//====================

// function sumOfEvenAndOdd(n, m) {
//     let sumOfEven = 0;
//     let sumOfOdd = 0;

//     for (let i = n; i <= m; i++) {
//         if (i % 2 === 0) {
//             sumOfEven += i;
//         } else {
//             sumOfOdd += i;
//         }
//     }

//     console.log(`sum of even numbers from ${n} to ${m}: ${sumOfEven}`);
//     console.log(`sum of odd numbers from ${n} to ${m}: ${sumOfOdd}`);
// }


// let numberN = 1;
// let numberM = 10;

// sumOfEvenAndOdd(numberN, numberM);

//===============

// function longestElement(array) {
//     if (array.length === 0) {
//         return null;
//     }

//     let longest = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length > longest.length) {
//             longest = array[i];
//         }
//     }

//     return longest;
// }


// let arrayLine = ['one', 'two', 'three'];

// let result = longestElement(arrayLine);
// console.log(`longest element: ${result}`);