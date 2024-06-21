(function () {
  const cachedFunc = (func,size) => {
    const cache = new Map();
    return (obj) => {
      if (!cache.has(obj)) {
        if (cache.size === size) {
          const firstEl = Array.from(cache).at(0);
          cache.delete(firstEl.at(0));
        }
        const res = func(obj);
        cache.set(obj, res);
      }
      return cache.get(obj);
    };
  };

  const testFunc = (obj) => {
    const currYear = new Date().getFullYear();
    return currYear - obj.year;
  };

  const user1 = { name: 'Serhii', year: '2001' };
  const user2 = { name: 'Serhii', year: '2002' };
  const user3 = { name: 'Serhii', year: '1999' };

  const cachedTest = cachedFunc(testFunc,10);
  console.log(cachedTest(user1));
  console.log(cachedTest(user2));
  console.log(cachedTest(user2));
  console.log(cachedTest(user3));
  console.log(cachedTest(user3));
  console.log(cachedTest(user3));
  console.log(cachedTest(user2));
  console.log(cachedTest(user1));
})();
