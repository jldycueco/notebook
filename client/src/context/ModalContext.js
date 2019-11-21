import React, { useState, createContext } from 'react';
import Backdrop from '../components/Backdrop';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeModalType = (value) => {
    setModalType(value);
  };

  const backdrop = <Backdrop click={closeModal} />;

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        backdrop,
        modalType,
        changeModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
