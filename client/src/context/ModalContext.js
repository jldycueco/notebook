import React, { useState, createContext } from 'react';
import Backdrop from '../components/Backdrop';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const backdrop = <Backdrop />;

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, openModal, closeModal, backdrop }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
