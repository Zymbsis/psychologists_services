import css from './AuthFormLayout.module.css';

const AuthFormLayout = ({
  title,
  intro,
  action = title,
  onSubmit,
  children,
  className,
}) => {
  return (
    <div className={`${css.wrapper} ${className}`}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.intro}>{intro}</p>
      <form
        className={css.form}
        onSubmit={onSubmit}>
        {children}
        <button
          className={`${css.submitBtn} ${
            action === 'Sign Up' && css.signUpBtn
          }`}
          type='submit'>
          {action}
        </button>
      </form>
    </div>
  );
};

export default AuthFormLayout;
