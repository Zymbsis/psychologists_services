import { icon } from 'img';
import css from './PasswordVisibilitySwitcher.module.css';

const PasswordVisibilitySwitcher = ({
  isPasswordVisible,
  switchPasswordVisibility,
}) => {
  return (
    <button
      className={css.switchButton}
      type='button'
      onClick={switchPasswordVisibility}
      aria-label='visibility password switcher'>
      <svg aria-label='eye'>
        <use
          href={`${icon}#${
            isPasswordVisible ? 'icon-closed-eye' : 'icon-opened-eye'
          }`}
        />
      </svg>
    </button>
  );
};

export default PasswordVisibilitySwitcher;
