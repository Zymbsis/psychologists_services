import css from './AuthorizationForm.module.css';

const AuthorizationForm = ({
  title,
  intro,
  action,
  onSubmit,
  children,
  register,
  errors,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{intro}</p>
      <form onSubmit={onSubmit}>
        {children}
        {register}
        {errors}
        <button type='submit'>{action}</button>
      </form>
    </>
  );
};

export default AuthorizationForm;
