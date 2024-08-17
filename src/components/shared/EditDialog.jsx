import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Textarea } from '../ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { postSchema } from '@/validation/postValidation';
import { useUpdatePostMutation } from '@/store/api/postApi';
import { toast } from 'sonner';
import FormError from './FormError';

const EditDialog = ({ post, open, setOpen }) => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: post.title,
      body: post.body,
      userId: post.userId,
    },
  });
  const onSubmit = (values) => {
    toast.promise(updatePost({ ...values, id: post.id }).unwrap(), {
      loading: 'Updating a post...',
      success: (data) => {
        form.reset();
        setOpen(false);
        return `Post was updated with id: ${data.id}`;
      },
      error: (error) => error.message || 'Something went wrong',
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Update post</DialogTitle>
          <DialogDescription>
            Change data and click Save to submit
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Title' {...field} />
                  </FormControl>
                  <FormError formState={form.formState} field='title' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='body'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel>Body</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Body' {...field} />
                  </FormControl>
                  <FormError formState={form.formState} field='body' />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='secondary'
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit' disabled={isLoading}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
