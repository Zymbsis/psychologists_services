import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from '@redux/user/selectors';
import { useModal } from 'helpers';
import { icon } from 'img';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LogoutPrompt from '../LogoutPrompt/LogoutPrompt';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { openModal } = useModal();
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectCurrentUser);

  return (
    <div className={css.userBarWrapper}>
      {isUserLoggedIn ? (
        <>
          <div className={css.userInfo}>
            <svg>
              <use href={`${icon}#icon-user`} />
            </svg>
            <span>{userName ? userName : 'User'}</span>
          </div>
          <button
            className={css.logoutBtn}
            type='button'
            onClick={() => openModal(<LogoutPrompt />)}>
            Log out
          </button>
        </>
      ) : (
        <>
          <button
            className={css.loginBtn}
            type='button'
            onClick={() => openModal(<LoginForm />)}>
            Log In
          </button>
          <button
            className={css.registerBtn}
            type='button'
            onClick={() => openModal(<RegistrationForm />)}>
            Registration
          </button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
