'use strict';
const onlyPositive = (arr) => {
  if (!Array.isArray(arr))
    return `Аргумент повинен бути масивом. Ви передали ${typeof arr}`;
  if (arr.length === 0) return `Передайте не порожній масив`;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr.at(i);
    if (Math.sign(curr) !== -1) newArr.push(curr);
  }
  return newArr.length ? newArr : null;
};

const arr = [1, 2, 3, -1, -2, -3];
const positiveArr = onlyPositive(arr);
console.log(positiveArr);
