import * as yup from 'yup';

export const loginFormValidationSchema = yup
  .object({
    email: yup
      .string()
      .email('invalid email format')
      .required('required field'),
    password: yup
      .string()
      .required('required field')
      .min(6, 'at least 6 characters')
      .max(20, 'not more then 20 characters'),
  })
  .required();
