import React from 'react';

const PostItem = ({ post }) => {
  return (
    <li
      className='card mb-3 shadow-sm'
      style={{ width: '18rem', height: '20rem' }}
      data-post-id={post.id}
    >
      <div className='card-body d-flex flex-column'>
        <h3 className='card-title mb-2'>{post.title}</h3>
        <p className='card-text '>{post.body}</p>
      </div>
    </li>
  );
};

export default PostItem;
