import { useForm } from 'react-hook-form';
import { useModal } from 'helpers';
import AuthModal from '../AuthModal/AuthModal';
import InputField from '../InputField/InputField';
import PasswordVisibilitySwitcher from '../PasswordVisibilitySwitcher/PasswordVisibilitySwitcher';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormValidationSchema } from 'validationSchemas';
import { signUp } from '../../services';

const RegistrationForm = () => {
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
    default: { name: '', email: '', password: '' },
    resolver: yupResolver(registerFormValidationSchema),
  });
  const onSubmit = (data, form) => {
    signUp(data);
    closeModal(form);
  };
  return (
    <AuthModal
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
        inputField='password'>
        <PasswordVisibilitySwitcher
          isPasswordVisible={isPasswordVisible}
          switchPasswordVisibility={switchPasswordVisibility}
        />
      </InputField>
    </AuthModal>
  );
};

export default RegistrationForm;
