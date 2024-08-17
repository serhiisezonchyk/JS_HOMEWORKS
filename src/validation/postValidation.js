import { z } from 'zod';

export const postSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be at least 2 characters long.' })
    .max(100, { message: 'Title can be up to 100 characters long.' }),
  body: z
    .string()
    .min(2, { message: 'Body must be at least 2 characters long.' })
    .max(500, { message: 'Body can be up to 500 characters long.' }),
  userId: z
    .number()
    .positive({ message: 'User ID must be a positive number.' })
    .int({ message: 'User ID must be an integer.' })
    .readonly(),
});
