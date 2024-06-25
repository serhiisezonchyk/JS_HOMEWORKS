import PhotoModel from './PhotoModel.js';

export default class PhotoController {
  view = null;
  albumId = null;
  constructor(view, albumId) {
    this.view = view;
    this.albumId = albumId;
  }

  async init() {
    try {
      this.view.showLoading();
      const photos = await PhotoModel.getPhotos(this.albumId);
      this.view.renderPhotos(photos);
    } catch (error) {
      this.view.showError(error);
    }
  }
}
