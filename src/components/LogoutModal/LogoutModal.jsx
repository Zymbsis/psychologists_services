import { signOut } from '../../services';
import css from './LogoutModal.module.css';
import { useModal } from 'helpers';
const LogoutModal = () => {
  const { closeModal } = useModal();

  const handleCancel = (e) => {
    closeModal(e);
  };
  const handleLogout = (e) => {
    signOut();
    closeModal(e);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Do you really want to leave?</p>
      <div className={css.btnWrapper}>
        <button
          className={css.logoutBtn}
          onClick={handleLogout}
          type='button'>
          Log out
        </button>
        <button
          className={css.cancelBtn}
          onClick={handleCancel}
          type='button'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
