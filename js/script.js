'use strict';
//TASK 1
let x = 10,
  y = 7;
console.log(`${x > y ? 'X більше за y' : 'x не більше, ніж y'}`);

//TASK 2
const isValidNum = (num) =>
  num === null || num.trim() === '' || isNaN(+num) ? false : true;

const resStr = (num) => {
  const length = String(Math.abs(num)).length;
  const sign = Math.sign(num);
  let response = `Число ${num} `;
  switch (length) {
    case 1:
      response += 'однозначне ';
      break;
    case 2:
      response += 'двоцифрове ';
      break;
    case 3:
      response += 'трицифрове ';
      break;
    case 4:
      response += 'чотицифрове ';
      break;
    default:
      response += 'багатоцифрове ';
      break;
  }
  switch (sign) {
    case 1:
      response += 'позитивне.';
      break;
    case -1:
      response += 'негативне.';
      break;
    default:
      response += 'нуль.';
      break;
  }
  return response;
};
const task2 = () => {
  const num = prompt('Введіть число:');
  if (!isValidNum(num)) return;
  console.log(resStr(+num));
};
task2();

//TASK3

const task3 = () => {
  let max = null;
  const a = +prompt('Введіть число a:') || 0;
  max = a;
  const b = +prompt('Введіть число b:') || 0;
  if (b > max) {
    max = b;
  }
  const c = +prompt('Введіть число c:') || 0;
  if (c > max) {
    max = c;
  }
  alert(max);
};
task3();

//TASK4

const task4 = (l1, l2, l3) =>
  l1 > l2 + l3 || l2 > l1 + l3 || l3 > l1 + l2 ? false : true;

const l1 = +prompt('Введіть довжину 1:') || 0;
const l2 = +prompt('Введіть довжину 2:') || 0;
const l3 = +prompt('Введіть довжину 3:') || 0;

if (l1 > 0 && l2 > 0 && l3 > 0) alert(task4(l1, l2, l3));
else alert('Сторона не може бути 0.');
