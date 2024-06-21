import PostModel from './PostModel.js';

class PostController {
  view = null;
  currentPostId = null;
  constructor(view) {
    this.view = view;
    this.view.bindSearchHandler(this.handleSearch.bind(this));
    this.view.bindCommentsHandler(this.handleLoadComments.bind(this));
  }

  handleSearch(postId) {
    const id = parseInt(postId, 10);
    if (isNaN(id) || id < 1 || id > 100) {
      this.view.showError(new Error('Post ID must be a number between 1 and 100.'));
      return;
    }
    this.view.showLoading();
    PostModel.getSinglePost(id)
      .then((post) => {
        this.view.renderPost(post);
        this.currentPostId = post.id;
      })
      .catch((error) => {
        this.view.showError(error);
      });
  }

  handleLoadComments() {
    this.view.showCommentsLoading();
    PostModel.getComments(this.currentPostId)
      .then((comments) => {
        this.view.renderComments(comments);
      })
      .catch((error) => {
        this.view.showError(error);
      });
  }
}
export default PostController;
