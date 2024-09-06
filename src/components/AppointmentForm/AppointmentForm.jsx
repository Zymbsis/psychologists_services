import { useForm } from 'react-hook-form';
import AuthFormLayout from '../AuthFormLayout/AuthFormLayout';
import css from './AppointmentForm.module.css';
import InputField from '../InputField/InputField';

const AppointmentForm = ({ photo, name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthFormLayout
      title='Make an appointment with a psychologists'
      intro='You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.'
      action='Send'
      onSubmit={handleSubmit(onSubmit)}
      additionalComponent={
        <div className={css.wrapper}>
          <img
            src={photo}
            alt={name}
            width={44}
            height={44}
          />
          <p>
            <span>Your psychologists</span>
            {name}
          </p>
        </div>
      }>
      <InputField
        register={register}
        errors={errors}
        inputField='name'
      />
      <div>
        <InputField
          register={register}
          errors={errors}
          placeholder='+380'
          type='tel'
          inputField='phone'
        />
        <InputField
          register={register}
          errors={errors}
          type='date'
          placeholder='00:00'
          inputField='date'
        />
      </div>
      <InputField
        register={register}
        errors={errors}
        inputField='email'
      />
      <textarea {...register('comment')}></textarea>
    </AuthFormLayout>
  );
};

export default AppointmentForm;
