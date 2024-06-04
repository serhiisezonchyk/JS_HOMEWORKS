(function () {
  const arr = [1, 2, 3];
  const iter = arr[Symbol.iterator]();
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());

  const myIterator = (arr) => {
    const iterableArr = Array.from(arr);
    let currIndex = 0;
    return {
      next() {
        const nextObj = {
          value: iterableArr[currIndex],
          done: iterableArr.length > currIndex ? false : true,
        };
        currIndex += 1;
        return nextObj;
      },
    };
  };

  const iter1 = myIterator(arr);
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
})();
