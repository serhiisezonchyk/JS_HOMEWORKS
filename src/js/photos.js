import PhotoView from './photo/PhotoView.js';
import PhotoController from './photo/PhotoController.js';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('albumId');

    const selectors = {
      dataContainer: '[data-photos]',
    };
    const view = new PhotoView(selectors);
    const controller = new PhotoController(view,albumId);
    controller.init();
  });
})();
