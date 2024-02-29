'use strict';

const isValidOperation = (operation) => {
  if (!['add', 'sub', 'mult', 'div'].includes(operation)) {
    console.log('Enter a valid operation !');
    alert('Enter a valid operation !');
    return false;
  }
  return true;
};
const isValidNumber = (num) => {
  if (isNaN(+num) || num.trim().length === 0) {
    console.log('Enter a number!');
    alert('Enter a number!');
    return false;
  }
  return true;
};

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => {
  if (b === 0) return 'Division by zero! ';
  return a / b;
};

const calculationResult = (operation, a, b) => {
  switch (operation) {
    case 'add':
      return `${a} + ${b} = ${sum(a, b)}`;
    case 'sub':
      return `${a} - ${b} = ${subtraction(a, b)}`;
    case 'mult':
      return `${a} * ${b} = ${multiplication(a, b)}`;
    case 'div':
      return `${a} / ${b} = ${division(a, b)}`;
    default:
      break;
  }
};
const calculate = () => {
  const operation = prompt('Enter operation (add, sub, mult, div):')
    .trim()
    .toLowerCase();

  if (!isValidOperation(operation)) {
    return;
  }
  const a = prompt('Enter first value:');
  if (!isValidNumber(a)) {
    return;
  }
  const b = prompt('Enter second value:');
  if (!isValidNumber(b)) {
    return;
  }

  alert(calculationResult(operation, +a, +b));
};

let flag = true;

calculate();
