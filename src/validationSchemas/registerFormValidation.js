import { loginFormValidationSchema } from './loginFormValidation';
import * as yup from 'yup';

export const registerFormValidationSchema = loginFormValidationSchema.shape({
  name: yup
    .string()
    .required('required field')
    .min(3, 'at least 3 characters')
    .max(30, 'not more than 30 characters')
    .matches(
      /^[a-zA-Z]+([a-zA-Z- ]*[a-zA-Z])?$/,
      'can only contain latin letters, one space (not at start/end), and hyphens',
    ),
});
