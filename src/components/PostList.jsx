import React from 'react';
import PostItem from './PostItem';

const PostListComponent = ({ children }) => {
  return (
    <ul className='d-flex flex-column' style={{ gap: '2rem' }}>
      {children}
    </ul>
  );
};

const PostList = Object.assign(PostListComponent, {
  Item: PostItem,
});
export default PostList;
