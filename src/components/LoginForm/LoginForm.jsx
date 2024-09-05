import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidationSchema } from 'validationSchemas';
import AuthFormLayout from '../AuthFormLayout/AuthFormLayout';
import InputField from '../InputField/InputField';
import PasswordVisibilitySwitcher from '../PasswordVisibilitySwitcher/PasswordVisibilitySwitcher';
import { useSignIn } from 'services';

const LoginForm = () => {
  const signIn = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginFormValidationSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const switchPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onSubmit = (data, form) => {
    signIn(data, form);
  };

  return (
    <AuthFormLayout
      title='Log In'
      intro='Welcome back! Please enter your credentials to access your account and
    continue your search for a psychologist.'
      onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register}
        errors={errors}
        inputField='email'
      />
      <InputField
        register={register}
        errors={errors}
        inputField='password'
        type={isPasswordVisible ? 'text' : 'password'}>
        <PasswordVisibilitySwitcher
          isPasswordVisible={isPasswordVisible}
          switchPasswordVisibility={switchPasswordVisibility}
        />
      </InputField>
    </AuthFormLayout>
  );
};

export default LoginForm;
