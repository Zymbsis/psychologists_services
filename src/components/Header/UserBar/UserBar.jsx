import { useModal } from '../../../helpers/context';
import icon from '../../../img/icons.svg';
import css from './UserBar.module.css';

const UserBar = () => {
  const isUserLoggedIn = false;
  const { openModal } = useModal();

  const openRegisterForm = () => {
    openModal(<div>RegisterForm</div>);
  };
  const openLoginForm = () => {
    openModal(<div>LoginForm</div>);
  };
  const openLogoutForm = () => {
    openModal(<div>LogoutForm</div>);
  };

  return (
    <div className={css.userBarWrapper}>
      {isUserLoggedIn ? (
        <>
          <div className={css.userInfo}>
            <svg
              width={40}
              height={40}>
              <use href={`${icon}#icon-user`} />
            </svg>
            <span>Name</span>
          </div>
          <button
            className={css.logoutBtn}
            type='button'
            onClick={openLogoutForm}>
            Log out
          </button>
        </>
      ) : (
        <>
          <button
            className={css.loginBtn}
            type='button'
            onClick={openLoginForm}>
            Log In
          </button>
          <button
            className={css.registerBtn}
            type='button'
            onClick={openRegisterForm}>
            Registration
          </button>
        </>
      )}
    </div>
  );
};

export default UserBar;
