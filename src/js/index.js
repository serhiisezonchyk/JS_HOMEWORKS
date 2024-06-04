(function () {
  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
    test: 1,
  };

  const deepFreeze = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) deepFreeze(obj[key]);
    }
    return Object.freeze(obj);
  };

  deepFreeze(user);
})();
