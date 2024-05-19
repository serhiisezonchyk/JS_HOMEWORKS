(function () {
  const formData = {};
  const formItem = document.querySelector('#form');
  const clearButton = document.querySelector('[data-clear-button]');
  clearButton.addEventListener('click', () => {
    localStorage.removeItem('formData');
    alert('Strorage is clear');
  });
  formItem.addEventListener('submit', (e) => {
    e.preventDefault();
    formItem.querySelectorAll('input, select, textarea').forEach((el) => {
      if (el.value.trim() !== '') formData[el.name] = el.value;
    });
    localStorage.setItem('formData', JSON.stringify(formData));
  });
})();
