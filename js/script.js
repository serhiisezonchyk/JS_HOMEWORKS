'use strict';
const isValidNum = (num) => {
  if (num === null) return false;
  if (num.length === 0 || isNaN(+num)) return false;
  return true;
};
const pow = (num, exp = 1) => {
  if (isValidNum(num) && isValidNum(exp)) return num ** exp;
  return false;
};

const num = prompt('Введіть число');
const exp = prompt('Введіть степінь');

const result = pow(num, exp);
result === false ? alert('Помилка') : alert(`${num}**${exp} = ${result}`);
