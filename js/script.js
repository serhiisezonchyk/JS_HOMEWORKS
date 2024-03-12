'use strict';

const arr = [1, 2, 3, 4, 5];

//Task1
let sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];
console.log(sum);

//Task2
sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i] ** 2;
console.log(sum);
