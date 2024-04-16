//Task #1
const getFactorial = (num) => {
  return num ? num * getFactorial(num - 1) : 1;
};
console.log('factorial 3: ', getFactorial(3));
console.log('factorial 0: ', getFactorial(0));
console.log('**********************');

//Task #2
const pow = (num, degree) => {
  if (degree === 0) {
    return 1;
  } else if (degree < 0) {
    return 1 / pow(num, -degree);
  }
  return num * pow(num, degree - 1);
};

console.log('pow 2^-2: ', pow(2, -2));
console.log('pow 2^4: ', pow(2, 4));
console.log('pow 2^0: ', pow(2, 0));
console.log('**********************');
//Task #3
const sum = (a, b) => {
  if (a > 0) {
    return sum((a -= 1), (b += 1));
  } else if (a < 0) {
    return sum((a += 1), (b -= 1));
  }
  return b;
};

console.log('sum -6 4: ', sum(-6, 4));
console.log('sum 2 4: ', sum(2, 4));
console.log('sum 3 -6: ', sum(3, -6));
console.log('sum -6 -12: ', sum(-6, -12));
