import { useForm } from 'react-hook-form';
import css from './LoginForm.module.css';
import { icon } from 'img';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidationSchema } from 'validationSchemas';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    default: { email: '', password: '' },
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 className={css.title}>Log In</h2>
      <p className={css.intro}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            className={errors.email && css.errorField}
            type='text'
            {...register('email')}
            placeholder='Email'
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
          <input
            className={errors.password && css.errorField}
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder='Password'
          />
          {!showPassword ? (
            <button
              onClick={() => {
                setShowPassword(true);
              }}
              aria-label='get password visible'>
              <svg aria-label='closed eye'>
                <use href={`${icon}#icon-closed-eye`} />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setShowPassword(false);
              }}
              aria-label='get password hidden'>
              <svg aria-label='opened eye'>
                <use href={`${icon}#icon-opened-eye`} />
              </svg>
            </button>
          )}
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <button className={css.submitBtn}>Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
