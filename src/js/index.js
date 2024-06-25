import AlbumController from './album/AlbumController.js';
import AlbumView from './album/AlbumView.js';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
      dataContainer: '[data-list]',
    };
    const view = new AlbumView(selectors);
    const controller = new AlbumController(view);
    controller.init();
  });
})();
