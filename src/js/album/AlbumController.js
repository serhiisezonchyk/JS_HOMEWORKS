import AlbumModel from './AlbumModel.js';

export default class AlbumController {
  view = null;
  constructor(view) {
    this.view = view;
  }
  async init() {
    try {
      this.view.showLoading();
      const albums = await AlbumModel.getAlbums();
      this.view.renderAlbums(albums);
    } catch (error) {
      this.view.showError(error);
    }
  }
}
