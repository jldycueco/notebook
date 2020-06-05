import React, { useState, createContext } from 'react';

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

  const value = {
    modalIsOpen,
    openModal,
    closeModal,
    modalType,
    changeModalType,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
