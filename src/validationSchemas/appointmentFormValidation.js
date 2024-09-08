import { registerFormValidationSchema } from './registerFormValidation';
import * as yup from 'yup';

export const appointmentFormValidationSchema = registerFormValidationSchema
  .omit(['password'])
  .shape({
    phone: yup
      .string()
      .min(13, 'valid format is "+380XXXXXXXXX" ')
      .max(13)
      .required(),
    comment: yup
      .string()
      .max(500, 'not more then 500 characters')
      .matches(/^[^<>${}|[\]]*$/, 'can`t contain <>${}[]|'),
  });
