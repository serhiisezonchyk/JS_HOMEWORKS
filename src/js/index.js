(function () {
  const items = [
    {
      name: 'Apple iPhone 13',
      category: 'Smartphones',
      price: 999.0,
    },
    {
      name: 'Samsung Galaxy S21 Ultra',
      category: 'Smartphones',
      price: 1199.99,
    },
    {
      name: 'Google Pixel 6 Pro',
      category: 'Smartphones',
      price: 899.0,
    },
    {
      name: 'Apple AirPods Pro',
      category: 'Wearable Tech',
      price: 249.0,
    },
    {
      name: 'Fitbit Charge 5',
      category: 'Wearable Tech',
      price: 179.95,
    },
    {
      name: 'Garmin Forerunner 945',
      category: 'Wearable Tech',
      price: 599.99,
    },
    {
      name: 'Sony WH-1000XM4 Headphones',
      category: 'Audio',
      price: 349.99,
    },
    {
      name: 'Bose QuietComfort 45 Headphones',
      category: 'Audio',
      price: 329.0,
    },
    {
      name: 'JBL Flip 5 Portable Speaker',
      category: 'Audio',
      price: 129.95,
    },
  ];
  const categories = [...new Set(items.map((el) => el.category))];

  const categoriesList = document.querySelector('[data-categories-list]');
  const itemsList = document.querySelector('[data-items-list]');
  const item = document.querySelector('[data-item]');

  const renderCategories = (categories) => {
    categoriesList.innerHTML = '';
    categories.forEach((category) => {
      const categoryItem = document.createElement('li');
      categoryItem.textContent = category;
      categoryItem.classList.add('shop__categories-list__item');
      categoriesList.appendChild(categoryItem);
    });
  };

  const renderItems = (itemsByCategory) => {
    for (const item of itemsByCategory) {
      const el = document.createElement('li');
      el.innerHTML = item.name;
      el.classList.add('shop__items-list__item');
      itemsList.append(el);
    }
  };
  const renderSingleItem = (selectedItem) => {
    const el = document.createElement('div');
    el.className = 'shop__item-el';
    const title = document.createElement('h2');
    title.innerHTML = selectedItem.name;

    const category = document.createElement('p');
    category.innerHTML = selectedItem.category;

    const price = document.createElement('p');
    price.innerHTML = `$${selectedItem.price}`;

    const buyBtn = document.createElement('button');
    buyBtn.className = 'btn btn-buy-card';
    buyBtn.innerHTML = 'Buy';
    buyBtn.addEventListener('click', handleBuyButtonClick);

    el.append(title, category, price, buyBtn);
    item.append(el);
  };
  const handleBuyButtonClick = (e) => {
    alert('Success');
    item.innerHTML = '';
    itemsList.innerHTML = '';
  };
  const handleOnCategoryClick = (e) => {
    itemsList.innerHTML = '';
    item.innerHTML = '';
    const selectedCategory = e.target.innerHTML;
    const itemsByCategory = items.filter((el) => el.category === selectedCategory);
    renderItems(itemsByCategory);
  };
  const handleOnItemClick = (e) => {
    item.innerHTML = '';
    const selectedItem = items.find((el) => el.name === e.target.innerHTML);
    renderSingleItem(selectedItem);
  };

  categoriesList.addEventListener('click', handleOnCategoryClick);
  itemsList.addEventListener('click', handleOnItemClick);

  renderCategories(categories);
})();
