const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];
const flat = function (arr) {
  if (arguments.length !== 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }

  const res = arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flat(val));
    } else {
      return acc.concat(val);
    }
  }, []);
  return res;
};
try {
  const array = flat(complexArray);
  console.log(array);
} catch (error) {
  console.log(error);
}
