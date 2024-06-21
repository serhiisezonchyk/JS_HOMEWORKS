class PostView {
  _searchInput = null;
  _searchButton = null;
  _resultWrapper = null;
  constructor({ searchInput, searchButton, resultWrapper }) {
    this.#searchInput = searchInput;
    this.#searchButton = searchButton;
    this.#resultWrapper = resultWrapper;
  }

  get searchInput() {
    return this._searchInput;
  }
  get searchButton() {
    return this._searchButton;
  }
  get resultWrapper() {
    return this._resultWrapper;
  }

  set #searchInput(selector) {
    this._searchInput = this.#validateSelector(selector);
  }
  set #searchButton(selector) {
    this._searchButton = this.#validateSelector(selector);
  }
  set #resultWrapper(selector) {
    this._resultWrapper = this.#validateSelector(selector);
  }

  renderPost(post) {
    this.resultWrapper.innerHTML = `
      <div class="result-block__post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button data-comments-button class="post__comments-button">Load Comments</button>
      </div>
      <div data-comments-section class="post__comments-section"></div>

    `;
  }

  renderComments(comments) {
    const commentsSection = document.querySelector('[data-comments-section]');
    commentsSection.innerHTML = comments
      .map(
        (comment) => `
      <div class="comment">
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
      </div>
    `,
      )
      .join('');
  }

  showError(error) {
    this.resultWrapper.innerHTML = `<p class="error">${error.message}</p>`;
  }

  showLoading() {
    this.resultWrapper.innerHTML = `<p class="loading">Loading...</p>`;
  }
  showCommentsLoading() {
    const commentsSection = document.querySelector('[data-comments-section]');
    commentsSection.innerHTML = `<p class="loading">Loading...</p>`;
  }

  bindSearchHandler(handler) {
    this.searchButton.addEventListener('click', () => {
      const postId = this.searchInput.value.trim();
      handler(postId);
    });
  }

  bindCommentsHandler(handler) {
    this.resultWrapper.addEventListener('click', (event) => {
      if (event.target.matches('[data-comments-button]')) {
        handler();
      }
    });
  }
  #validateSelector(selector) {
    if (typeof selector !== 'string') throw new Error('selector should be a string');
    if (selector.trim() === '') throw new Error('selector should not be empty');

    const element = document.querySelector(selector);

    if (element === null) throw new Error('selector not found in DOM');
    return element;
  }
}

export default PostView;
