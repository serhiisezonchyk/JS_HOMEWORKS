import * as Yup from 'yup';

export default Yup.object({
  title: Yup.string()
    .default('')
    .max(15, 'Must be 15 characters or less')
    .required('Title is required'),

  description: Yup.string()
    .default('')
    .max(20, 'Must be 40 characters or less'),
  status: Yup.string()
    .oneOf(['completed', 'not-completed', 'pending'], 'Invalid status')
    .required('Status is required')
    .default('pending'),
});
