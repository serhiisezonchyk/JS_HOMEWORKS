(function () {
  const cardContainer = document.querySelector('[data-card-container]');

  const testData = [
    {
      id: 1,
      imageSrc: '../assets/images/no-image.png',
      imageAlt: 'Product Image 1',
      cardTitle: 'Card Title 1',
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardLink: '#',
    },
    {
      id: 2,
      imageSrc: '../assets/images/no-image.png',
      imageAlt: 'Product Image 2',
      cardTitle: 'Card Title 2',
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardLink: '#',
    },
    {
      id: 3,
      imageSrc: '../assets/images/no-image.png',
      imageAlt: 'Product Image 3',
      cardTitle: 'Card Title 3',
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardLink: '#',
    },
  ];

  const fetchCardTemplate = async () => {
    try {
      const response = await fetch('./components/card-item.html');
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.text();
    } catch (error) {
      console.error('Error loading card template:', error);
      return '';
    }
  };

  const replaceTemplatePlaceholders = (template, data) => {
    return template
      .replace('{imageSrc}', data.imageSrc)
      .replace('{imageAlt}', data.imageAlt)
      .replace('{cardTitle}', data.cardTitle)
      .replace('{cardText}', data.cardText)
      .replace('{cardLink}', data.cardLink)
      .replace('{cardId}', data.id);
  };

  const updateSaveButton = (button, isSaved) => {
    button.classList.toggle('btn-outline-secondary', !isSaved);
    button.classList.toggle('btn-outline-saved', isSaved);
    button.textContent = isSaved ? 'Remove' : 'Save';
  };

  const toggleCardSave = (event, cardData) => {
    event.preventDefault();
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    const cardIndex = savedCards.findIndex((card) => card.id === cardData.id);
    const isSaved = cardIndex === -1;

    isSaved ? savedCards.push(cardData) : savedCards.splice(cardIndex, 1);
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
    updateSaveButton(event.target, isSaved);
  };

  const initializeCards = async () => {
    const cardTemplate = await fetchCardTemplate();
    if (!cardTemplate) return;

    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

    testData.forEach((data) => {
      const cardHTML = replaceTemplatePlaceholders(cardTemplate, data);
      const cardElement = document.createElement('article');
      cardElement.innerHTML = cardHTML;

      const saveButton = cardElement.querySelector('[data-save-btn]');
      const isSaved = savedCards.some((card) => card.id === data.id);
      updateSaveButton(saveButton, isSaved);

      saveButton.addEventListener('click', (event) => toggleCardSave(event, data));
      cardContainer.appendChild(cardElement);
    });
  };

  initializeCards();
})();
