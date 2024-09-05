import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormValidationSchema } from 'validationSchemas';
import { signUp } from 'services';
import { useModal } from 'helpers';
import AuthFormLayout from '../AuthFormLayout/AuthFormLayout';
import InputField from '../InputField/InputField';
import PasswordVisibilitySwitcher from '../PasswordVisibilitySwitcher/PasswordVisibilitySwitcher';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../redux/user/slice';

const RegistrationForm = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const switchPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(registerFormValidationSchema),
  });
  const onSubmit = (data, form) => {
    signUp(data);
    dispatch(setUserName(data.name));
    closeModal(form);
  };
  return (
    <AuthFormLayout
      title='Registration'
      intro='Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.'
      action='Sign Up'
      onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register}
        errors={errors}
        inputField='name'
      />
      <InputField
        register={register}
        errors={errors}
        inputField='email'
      />
      <InputField
        register={register}
        errors={errors}
        type={isPasswordVisible ? 'text' : 'password'}
        inputField='password'>
        <PasswordVisibilitySwitcher
          isPasswordVisible={isPasswordVisible}
          switchPasswordVisibility={switchPasswordVisibility}
        />
      </InputField>
    </AuthFormLayout>
  );
};

export default RegistrationForm;
