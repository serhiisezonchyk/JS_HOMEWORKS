'use strict';
const isValidNumber = (a) => {
  if (!isNaN(+a) && a !== null && a.trim().length !== 0) return true;
  alert('Enter valid number!');
  return false;
};

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => (b === 0 ? 'Division by zero! ' : a / b);

const task = () => {
  const a = prompt('Enter first value');
  if (!isValidNumber(a)) return;

  const b = prompt('Enter second value');
  if (!isValidNumber(b)) return;

  const resulStr = `Result for nums ${a}, ${b}:\n
  ${a} + ${b} = ${sum(+a, +b)}
  ${a} - ${b} = ${subtraction(+a, +b)}
  ${b} - ${a} = ${subtraction(+b, +a)}
  ${a} * ${b} = ${multiplication(+a, +b)}
  ${a} / ${b} = ${division(+a, +b)}
  ${b} / ${a} = ${division(+b, +a)}`;
  
  alert(resulStr);
};

task();
