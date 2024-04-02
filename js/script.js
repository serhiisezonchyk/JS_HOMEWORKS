'use strict';
const arr = [1, 2, 3, 4, 5, 6, 7, 3, 8, 9];

// indexOf
const indexOf = (arr, searchElement, fromIndex = 0) => {
  const startPos = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  for (let i = startPos; i < arr.length; i++) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};
console.log('indexOf', arr.indexOf(3));
console.log('indexOf', indexOf(arr, 3));

// lastIndexOf
const lastIndexOf = (arr, searchElement, fromIndex = arr.length) => {
  const startPos = fromIndex < 0 ? arr.length + fromIndex : fromIndex;

  for (let i = startPos; i >= 0; i--) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};
console.log('lastIndexOf', arr.lastIndexOf(3));
console.log('lastIndexOf', lastIndexOf(arr, 3));

// find
const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return arr[i];
  }
};
console.log(
  'find',
  arr.find((el) => el > 4)
);
console.log(
  'find',
  find(arr, (el) => el > 4)
);

// findIndex
const findIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return i;
  }
  return -1;
};
console.log(
  'findIndex',
  arr.findIndex((el) => el > 4)
);
console.log(
  'findIndex',
  findIndex(arr, (el) => el > 4)
);

// includes
const includes = (arr, searchElement, fromIndex = 0) => {
  const startPos = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  for (let i = startPos; i < arr.length; i++) {
    if (arr[i] === searchElement) return true;
  }
  return false;
};
console.log('includes', arr.includes(4, -2));
console.log('includes', includes(arr, 4, -2));
// every
const every = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
};
console.log(
  'every',
  arr.every((elem) => elem % 2 === 0)
);
console.log(
  'every',
  every(arr, (elem) => elem % 2 === 0)
);
// some
const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
};
console.log(
  'every',
  arr.some((elem) => elem % 2 === 0)
);
console.log(
  'every',
  some(arr, (elem) => elem % 2 === 0)
);
// reduce

const reduce = (arr, callback, accumulator) => {
  let result = accumulator;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
};
console.log(
  'reduce',
  arr.reduce((acc, cur) => acc + cur, 0)
);
console.log(
  'reduce',
  reduce(arr, (acc, cur) => acc + cur, 0)
);
