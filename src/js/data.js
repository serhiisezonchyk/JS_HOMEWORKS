(function () {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const emptyLabel = document.querySelector('[data-empty-label]');
  const ulList = document.querySelector('[data-list]');
  
  if (!formData) {
    ulList.classList.add('d-none');
    ulList.classList.remove('d-block');
    emptyLabel.classList.add('d-block');
    emptyLabel.classList.remove('d-none');
  } else {
    ulList.classList.add('d-block');
    ulList.classList.remove('d-none');
    emptyLabel.classList.add('d-none');
    emptyLabel.classList.remove('d-block');

    for (const [key, value] of Object.entries(formData)) {
      const listEl = document.createElement('li');
      listEl.classList.add('list-group-item');
      listEl.innerHTML = `${key}: ${value}`;
      ulList.append(listEl);
    }
  }
})();
