'use strict';
// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const task1 = ['a', 'b', 'c', 'd'];
console.log(task1.join('+').replace('b+', 'b, '));
// console.log([task1.slice(0, 2).join('+'), task1.slice(-2).join('+')].join(', '));

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const task2 = [2, 5, 3, 9];
const result = task2.at(0) * task2.at(1) + task2.at(2) * task2.at(3);
console.log(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const task3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(task3[1][0]);
// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const task4 = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
console.log(task4.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
const task5 = new Array(5).fill().map((_, i) => 'x'.repeat(i + 1));
console.log(task5);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
const task6 = new Array(5)
  .fill()
  .map((_, i) => +(i + 1).toString().repeat(i + 1));
console.log(task6);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
const arrayFill = (value, count) => new Array(count).fill(value);
console.log(arrayFill('x', 5));

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const task8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = ((sum = 0) => task8.findIndex((el) => (sum += el) > 10) + 1)();
console.log(count);
// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const reverse = (arr) => {
  const res = [...arr];
  for (let i = 0; i < res.length / 2; i++) {
    const temp = res[i];
    res[i] = res[res.length - 1 - i];
    res[res.length - 1 - i] = temp;
  }
  return res;
};
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse([1, 2, 3, 4, 5]));

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const task10 = [[1, 2, 3], [4, 5], [6]];
const sum = (arr) => {
  let acc = 0;
  arr.forEach((el) => {
    !Array.isArray(el) ? (acc += el) : (acc += sum(el));
  });
  return acc;
};
console.log(sum(task10));

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const task11 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(sum(task11));
