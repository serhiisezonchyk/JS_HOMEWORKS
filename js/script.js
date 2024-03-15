'use strict';
const padString = (str, length, symbol = '*', left = false) => {
  if (typeof str !== 'string' || str?.length === 0) return 'Не валідний рядок.';
  if (typeof length !== 'number' || length <= 0) return 'Не валідна довжина.';
  if (typeof symbol !=='string') return 'Не валідний символ.';
  if (typeof left !== 'boolean') return 'Не валідний флаг.';

  if (length <= str.length) {
    return str.substring(0, length);
  }
  const padLength = length - str.length;
  const padding = symbol.repeat(padLength);
  return left ? padding + str : str + padding;
};
console.log(padString('hello', 8,true));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2));
