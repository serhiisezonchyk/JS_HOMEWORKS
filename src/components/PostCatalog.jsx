import React, { Component } from 'react';
import PostList from './PostList';
import axios from 'axios';

class PostCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isPostsLoading: true,
    };
    this.abortController = new AbortController();
  }
  async componentDidMount() {
    this.abortController.abort();
    this.abortController = new AbortController();
    try {
      const posts = await this.fetchPosts(this.abortController.signal);
      this.setState({ posts });
    } catch (error) {
      if (!axios.isCancel(error)) {
        alert(error);
      }
    } finally {
      this.setState({ isPostsLoading: false });
    }
  }
  componentWillUnmount() {
    this.abortController.abort();
  }
  fetchPosts = async (signal) => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        signal,
      }
    );
    return data;
  };
  render() {
    const { posts, isPostsLoading } = this.state;
    return (
      <div className='posts'>
        <div className='container'>
          <PostList>
            {isPostsLoading ? (
              <span>Loading...</span>
            ) : (
              posts.map((el) => <PostList.Item key={el.id} post={el} />)
            )}
          </PostList>
        </div>
      </div>
    );
  }
}
export default PostCatalog;
