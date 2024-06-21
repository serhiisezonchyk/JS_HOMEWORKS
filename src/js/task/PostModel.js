class PostModel {
  static #URL = 'https://jsonplaceholder.typicode.com/posts/';

  static getSinglePost(postId) {
    return fetch(`${this.#URL}${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  static getComments(postId) {
    return fetch(`${this.#URL}${postId}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error!`);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default PostModel;
