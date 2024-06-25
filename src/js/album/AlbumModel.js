export default class AlbumModel {
  static #URL = 'https:/jsonplaceholder.typicode.com/albums';

  static async getAlbums() {
    try {
      const fetchedData = await fetch(this.#URL);
      const data = await fetchedData.json();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

}
