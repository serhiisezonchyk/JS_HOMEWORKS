import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Eye, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDeletePostMutation } from '@/store/api/postApi';
import { toast } from 'sonner';

const PostItem = ({ post, className }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();

    toast.promise(deletePost(post.id).unwrap(), {
      loading: 'Loading...',
      success: () => `Post with id ${post.id} was deleted.`,
      error: (error) => error.message || 'Something went wrong',
    });
    
  };
  return (
    <Link to={`${post.id}`}>
      <Card
        className={cn(
          className,
          'hover:shadow-xl transition-shadow duration-300 cursor-pointer'
        )}
      >
        <CardHeader>
          <CardTitle className='text-ellipsis overflow-hidden h-10 whitespace-nowrap '>
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='line-clamp-3'>{post.body}</p>
        </CardContent>
        <CardFooter className='flex gap-2 justify-end'>
          <Button
            variant='destructive'
            size='icon'
            onClick={handleDelete}
            disabled={isLoading}
          >
            <Trash size={14} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostItem;
