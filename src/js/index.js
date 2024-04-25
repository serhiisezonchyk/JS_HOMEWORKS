(function () {
  const initSum = (initial) => {
    let res = initial;
    return (num) => {
      res += num;
      return res;
    };
  };

  const sum = initSum(3);
  console.log(sum(0))
  console.log(sum(4));
  console.log(sum(10));
})();
