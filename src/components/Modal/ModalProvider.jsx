import { useState } from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'react-toastify';
import { modalContext } from 'helpers';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    document.body.style.overflow = 'hidden';
    toast.dismiss();
    setModalContent(content);
  };

  const closeModal = (e) => {
    if (
      (e.code && e.code === 'Escape') ||
      e.target === e.currentTarget ||
      e.type === 'submit'
    ) {
      document.body.style.overflow = 'visible';
      setModalContent(null);
    }
  };

  return (
    <modalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <ModalBackdrop>{modalContent}</ModalBackdrop>,
          document.querySelector('#modal-root'),
        )}
    </modalContext.Provider>
  );
};

export default ModalProvider;
