import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';

const PostCatalog = () => {
  const { data, isLoading, error, isError } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div className='posts'>
      <div className='container'>
        <PostList>
          {isLoading ? (
            <span>Loading...</span>
          ) : isError ? (
            <span>error</span>
          ) : (
            data.map((el) => <PostList.Item key={el.id} post={el} />)
          )}
        </PostList>
      </div>
    </div>
  );
};

export default PostCatalog;
