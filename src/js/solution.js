(function () {
  let ulId = document.getElementById('ulId');
  let listItems = ulId.childNodes;
  console.log('Count with Text elements: ', listItems.length);

  const liObjects = [];
  for (const li of listItems) {
    if (li instanceof HTMLElement) {
      console.log(li);
      liObjects.push(li.textContent);
    }
  }
  
  console.log('Count without Text elements: ', liObjects.length);
  console.log(liObjects);
})();
