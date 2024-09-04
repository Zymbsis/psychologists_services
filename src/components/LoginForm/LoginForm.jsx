import { useForm } from 'react-hook-form';
import { useModal } from 'helpers';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidationSchema } from 'validationSchemas';
import AuthModal from '../AuthModal/AuthModal';
import InputField from '../InputField/InputField';
import PasswordVisibilitySwitcher from '../PasswordVisibilitySwitcher/PasswordVisibilitySwitcher';

const LoginForm = () => {
  const { closeModal } = useModal();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const switchPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    default: { email: '', password: '' },
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit = (data, form) => {
    console.log(data);
    closeModal(form);
  };

  return (
    <AuthModal
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
    </AuthModal>
  );
};

export default LoginForm;
