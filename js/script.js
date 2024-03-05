'use strict';

const isValidNumber = (a) => {
  if (!isNaN(+a) && a !== null && a.trim().length !== 0) return true;
  alert('Enter valid number!');
  return false;
};

function calcAvarage() {
  return (
    [...arguments].reduce((acc, curr) => acc + +curr, 0) / arguments.length
  );
}
const task = () => {
  const a = prompt('Enter first value');
  if (!isValidNumber(a)) return;

  const b = prompt('Enter second value');
  if (!isValidNumber(b)) return;

  const c = prompt('Enter third value');
  if (!isValidNumber(c)) return;

  const avg = calcAvarage(a, b, c);
  alert(`Avg from [${a},${b},${c}] = ${avg}`);
};

task();
