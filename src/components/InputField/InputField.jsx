import css from './InputField.module.css';

const InputField = ({
  register,
  errors,
  inputField,
  children,
  className,
  type = 'text',
  placeholder = inputField,
}) => {
  return (
    <label className={`${css.label} ${className}`}>
      <input
        className={`${css.input} ${errors[inputField] && css.errorInput}`}
        type={type}
        {...register(inputField)}
        placeholder={placeholder}
      />
      {children}
      {errors[inputField] && (
        <span className={css.errorMessage}>{errors[inputField].message}</span>
      )}
    </label>
  );
};

export default InputField;
