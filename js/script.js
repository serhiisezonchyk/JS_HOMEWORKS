'use strict';

const isValidNum = (num) => {
  if (num === null) {
    alert('Ви відмінили.');
    return false;
  } else if (num.trim() === '' || isNaN(+num)) {
    alert('Не валідне число');
    return false;
  } else return true;
};

const formStrByNum = (num) => {
  const strNum = String(num);
  if (strNum.length === 2 && +strNum.at(0) === 1) return `Вам ${num} років.`;

  const lastNum = +strNum.at(-1);
  switch (lastNum) {
    case 1:
      return `Вам ${num} рік.`;
    case 2:
    case 3:
    case 4:
      return `Вам ${num} роки.`;
    default:
      return `Вам ${num} років.`;
  }
};
const task = () => {
  const age = prompt('Введіть вік:');
  if (!isValidNum(age)) return;

  console.log(formStrByNum(+age));
};

task();
