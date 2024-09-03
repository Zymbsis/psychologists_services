import { useForm } from 'react-hook-form';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ default: { name: '', email: '', password: '' } });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            className={errors.name && css.errorField}
            placeholder='Name'
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label>
          <input
            className={errors.email && css.errorField}
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
          <input
            className={errors.password && css.errorField}
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
};

export default RegistrationForm;
