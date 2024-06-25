export default class PhotoModel {
  static #URL = 'https:/jsonplaceholder.typicode.com/photos';

  static async getPhotos(albumId) {
    try {
      const fetchedData = await fetch(`${this.#URL}?albumId=${albumId}`);
      const data = await fetchedData.json();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
