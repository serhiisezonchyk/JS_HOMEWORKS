import EditDialog from '@/components/shared/EditDialog';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetPostByIdQuery } from '@/store/api/postApi';
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const SinglePost = () => {
  const { postId } = useParams();
  const [openDialog, setOpenDialog] = useState(false);
  const { data, isLoading } = useGetPostByIdQuery(postId);
  if (isLoading)
    return (
      <div className='pt-2'>
        <div className='container'>
          <div className='space-y-2'>
            <Skeleton className='w-1/6 h-10 rounded-none' />
            <Skeleton className='w-full h-16 rounded-none' />
            <Skeleton className='w-full h-16 rounded-none' />
            <div className='flex gap-2 justify-end'>
              <Skeleton className='w-36 h-10 rounded-none' />
            </div>
          </div>
        </div>
      </div>
    );

  if (!data) return <Navigate to='/404' />;

  return (
    <>
      <div className='pt-2'>
        <div className='container'>
          <article className='space-y-2 prose lg:prose-xl'>
            <h1>Post #{data.id}</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <div className='flex gap-2 justify-end'>
              <Button onClick={() => setOpenDialog(true)}>Edit post</Button>
            </div>
          </article>
        </div>
      </div>
      {openDialog && (
        <EditDialog post={data} open={openDialog} setOpen={setOpenDialog} />
      )}
    </>
  );
};

export default SinglePost;
