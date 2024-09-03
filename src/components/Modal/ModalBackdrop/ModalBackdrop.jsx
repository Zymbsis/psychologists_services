import { useEffect } from 'react';
import { useModal } from 'helpers';
import { icon } from 'img';
import css from './ModalBackdrop.module.css';

const ModalBackdrop = ({ children }) => {
  const { closeModal } = useModal();

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <div
      className={css.backdrop}
      onClick={closeModal}>
      <div className={css.window}>
        <button
          className={css.closeButton}
          type='button'
          onClick={closeModal}>
          <svg>
            <use href={`${icon}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBackdrop;
