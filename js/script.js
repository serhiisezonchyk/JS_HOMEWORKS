'use strict';

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
const numArr = [];
for (let i = 10; i < 21; i++) numArr.push(i);

console.log(numArr.join(','));

// 2. Вивести квадрати чисел від 10 до 20.
for (let i = 0; i < numArr.length; i++) numArr[i] = numArr[i] ** 2;

console.log(numArr.join(','));

// 3. Вивести таблицю множення на 7.
for (let i = 0; i < 11; i++) console.log(`7 * ${i} = ${7 * i}`);

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i < 16; i++) sum += i;

console.log(sum);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;
for (let i = 15; i < 36; i++) mult *= i;

console.log(mult);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let avg = 0;
for (let i = 1; i < 501; i++) avg += i / 500;

console.log(avg);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
sum = 0;
for (let i = 30; i < 81; i++) if (i % 2 === 0) sum += i;

console.log(sum);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
numArr.length = 0;
for (let i = 100; i < 201; i++) i % 3 === 0 && numArr.push(i);

console.log(numArr.join(','));

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
numArr.length = 0;
const num = 10;
for (let i = 1; i < num + 1; i++) num % i === 0 && numArr.push(i);
console.log(`${num}: ${numArr.join(', ')}`);

// 10. Визначити кількість його парних дільників.
const divSum = numArr.filter((el) => el % 2 === 0);
console.log(`Кількість парних множників: ${divSum.length}`);

// 11. Знайти суму його парних дільників.
sum = divSum.reduce((acc, curr) => (acc += curr), 0);
console.log(`Сумма парних множників: ${sum}`);

// 12. Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i < 11; i++) {
  console.log('-----------------');
  for (let j = 1; j < 11; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
