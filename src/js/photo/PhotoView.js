export default class PhotoView {
  #dataContainer = null;
  constructor({ dataContainer }) {
    this.#dataContainer = this.#validateSelector(dataContainer);
  }
  #createPhotoTemplate(photo) {
    const photoElement = document.createElement('div');
    photoElement.className = 'col-md-3 mb-4';
    photoElement.innerHTML = `
        <div class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" loading="lazy" alt="${photo.title}">
            <div class="card-body">
                <p class="card-text">${photo.title}</p>
            </div>
        </div>
    `;
    return photoElement;
    
  }
  renderPhotos(photos) {
    this.#dataContainer.innerHTML = ``;
    photos.forEach((photo) => {
      const photoToRender = this.#createPhotoTemplate(photo);
      this.#dataContainer.appendChild(photoToRender);
    });
  }
  showLoading() {
    this.#dataContainer.innerHTML = `<p>Loading...</p>`;
  }
  showError(error) {
    this.#dataContainer.innerHTML = `<p>${error}</p>`;
  }
  #validateSelector(selector) {
    if (typeof selector !== 'string') throw new Error('Selector should be a string');
    if (selector.trim() === '') throw new Error('Selectro should be not empty');

    const el = document.querySelector(selector);
    if (el === null) throw new Error('Element not found by selector');
    return el;
  }
}
