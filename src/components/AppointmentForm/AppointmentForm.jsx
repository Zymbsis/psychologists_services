import { useForm } from 'react-hook-form';
import AuthFormLayout from '../AuthFormLayout/AuthFormLayout';
import css from './AppointmentForm.module.css';
import InputField from '../InputField/InputField';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import { useState } from 'react';
import { appointmentFormValidationSchema } from '../../validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

const AppointmentForm = ({ photo, name }) => {
  const userEmail = useSelector(selectIsLoggedIn);

  const [phoneValue, setPhoneValue] = useState('+380');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '+380',
      date: '00:00',
      email: `${userEmail ?? ''}`,
      comment: '',
    },
    resolver: yupResolver(appointmentFormValidationSchema),
  });

  const handlePhoneChange = ({ target: { value } }) => {
    if (/^\+380/.test(value) && value.length <= 13) {
      setPhoneValue(value);
      setValue('phone', value);
    } else if (value.length > 13) {
      setPhoneValue(value.slice(0, 13));
      setValue('phone', value);
    } else {
      setPhoneValue('+380');
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthFormLayout
      title='Make an appointment with a psychologist'
      intro='You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.'
      action='Send'
      className={css.container}
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
        autoComplete='off'
      />
      <div className={css.inputWrapper}>
        <InputField
          register={register}
          errors={errors}
          inputField='phone'
          value={phoneValue}
          autoComplete='off'
          onChange={handlePhoneChange}
        />
        <InputField
          register={register}
          errors={errors}
          type='time'
          placeholder='00:00'
          inputField='date'
        />
      </div>
      <InputField
        register={register}
        errors={errors}
        inputField='email'
      />
      <label className={`${css.comment} ${errors.comment && css.errorComment}`}>
        <textarea
          placeholder='Comment'
          {...register('comment')}></textarea>
        {errors.comment && <span>{errors.comment.message}</span>}
      </label>
    </AuthFormLayout>
  );
};

export default AppointmentForm;
