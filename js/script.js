'use strict';

const minDiv = (num) => {
  if (Math.sign(num) === -1) return NaN;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return i;
  }
  return num;
};
const isValidNum = (num) => {
  if (num === null) {
    alert('Допобачення');
    return false;
  }
  if (num.trim() === '' || isNaN(num)) {
    alert('Введіть нормальне число');
    return false;
  }
  return true;
};

const task1 = () => {
  const num = prompt('Введіть число:');
  if (!isValidNum(num)) return;
  console.log(minDiv(+num));
};

task1();
