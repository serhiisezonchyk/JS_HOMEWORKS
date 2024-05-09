(function () {
  const generateList = (arr) => {
    const list = document.createElement('ul');
    list.classList.add('list');
    for (const el of arr) {
      const listEl = document.createElement('li');
      listEl.classList.add('list__el');
      Array.isArray(el) ? listEl.appendChild(generateList(el)) : (listEl.innerHTML = el);
      list.appendChild(listEl);
    }
    return list;
  };

  const testArr = [1, 2, [2.1, 2.2, 2.3], 3, [3.1], 4, [], 5, [6.1, 6.2, ['6.2.1']]];
  const list = generateList(testArr);

  document.body.append(list);
})();
