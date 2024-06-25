export default class AlbumView {
  #dataContainer = null;
  constructor({ dataContainer }) {
    this.#dataContainer = this.#validateSelector(dataContainer);
  }
  #createAlbumTemplate(album) {
    const albumElement = document.createElement('a');
    albumElement.href = `photos.html?albumId=${album.id}`;
    albumElement.className = 'list-group-item list-group-item-action';
    albumElement.textContent = album.title;
    return albumElement;
  }
  renderAlbums(albums) {
    this.#dataContainer.innerHTML = ``;
    albums.forEach((album) => {
      const albumToRender = this.#createAlbumTemplate(album);
      this.#dataContainer.appendChild(albumToRender);
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
