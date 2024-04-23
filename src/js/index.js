const initSum = function () {
  let res = 0;
  return function (x) {
    return (res += x);
  };
};

const sum = initSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(5));
