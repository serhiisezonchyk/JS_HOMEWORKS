(function () {
  const ulId = document.getElementById('ulId');
  const ulIdAttributes = ulId.attributes;
  console.log(ulIdAttributes);

  const ulIdAttribute = {
    names: [],
    values: [],
  };

  for (const el of ulIdAttributes) {
    ulIdAttribute.names.push(el.name);
    ulIdAttribute.values.push(el.value);
  }
  console.log(ulIdAttribute.names);
  console.log(ulIdAttribute.values);

  ulId.lastElementChild.textContent = 'Hi, my name is Serhii';
  ulId.firstElementChild.setAttribute('data-my-name', 'Serhii');

  ulId.removeAttribute('data-dog-tail');
})();
