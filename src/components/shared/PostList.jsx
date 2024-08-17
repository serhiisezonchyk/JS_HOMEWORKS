import React from 'react';
import PostItem from './PostItem';
import Loader from './Loader';
import { cn } from '@/lib/utils';

const PostList = ({ className, data, isLoading }) => {
  if (isLoading) return <Loader className='w-full p-2' />;
  return (
    <div
      className={cn(
        'grid gap-2 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]',
        className
      )}
    >
      {data.length === 0 && <span>Posts not found</span>}
      {data.map((el) => (
        <PostItem key={el.id} post={el} />
      ))}
    </div>
  );
};

export default PostList;
