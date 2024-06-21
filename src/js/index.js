import PostController from './task/PostController.js';
import PostView from './task/PostView.js';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
        searchInput:'[data-search-input]',
        searchButton:'[data-search-button]',
        resultWrapper:'.result-block__wrapper'
    }
    const view = new PostView(selectors);
    new PostController(view);
  });
})();
