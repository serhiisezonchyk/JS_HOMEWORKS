'use strict';

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

const calculationResult = (operator, a, b) => {
  const result = 'Result: ';
  switch (operator) {
    case '+':
      return result + `${a} + ${b} = ${sum(a, b)}`;
    case '-':
      return result + `${a} - ${b} = ${subtraction(a, b)}`;
    case '*':
      return result + `${a} * ${b} = ${multiplication(a, b)}`;
    case '/':
      return result + `${a} / ${b} = ${division(a, b)}`;
    default:
      return 'Unknown operator!';
  }
};
const calculate = () => {
  const a = prompt('Enter first value:');
  if (!isValidNumber(a)) {
    return;
  }
  const b = prompt('Enter second value:');
  if (!isValidNumber(b)) {
    return;
  }

  console.log(calculationResult('+', +a, +b));
  console.log(calculationResult('-', +a, +b));
  console.log(calculationResult('-', +b, +a));
  console.log(calculationResult('*', +a, +b));
  console.log(calculationResult('/', +a, +b));
  console.log(calculationResult('/', +b, +a));
};

calculate();
