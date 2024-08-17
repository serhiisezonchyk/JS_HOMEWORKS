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
import { useCreatePostMutation } from '@/store/api/postApi';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import FormError from './FormError';

const AddDialog = ({ open, setOpen }) => {
  const userId = 1;
  const [createPost, { isLoading }] = useCreatePostMutation();
  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      body: '',
      userId,
    },
  });
  const onSubmit = (values) => {
    toast.promise(createPost(values).unwrap(), {
      loading: 'Creating a post...',
      success: (data) => {
        form.reset();
        setOpen(false);
        return `Post was created with id: ${data.id}`;
      },
      error: (error) => error.message || 'Something went wrong',
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add new post</DialogTitle>
          <DialogDescription>
            Write title and body of new post here. Then, click Save or Cancel.
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

export default AddDialog;
