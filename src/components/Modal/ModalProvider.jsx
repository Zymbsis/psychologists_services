import { useState } from 'react';
import { modalContext } from 'helpers';
import { createPortal } from 'react-dom';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = (e) => {
    if (
      (e.code && e.code === 'Escape') ||
      e.target === e.currentTarget ||
      e.type === 'submit'
    ) {
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
