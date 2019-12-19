import React, { useContext } from 'react';
import NotesList from './NotesList/';
import NotesForm from './NotesForm/';
import { ModalContext } from '../../context/ModalContext';
import ModalAddForm from '../Modal/ModalAddForm';
import ModalEditForm from '../Modal/ModalEditForm';

const NotesContainer = () => {
  const { modalIsOpen, modalType } = useContext(ModalContext);
  let modalContent;

  if (modalType === 'addForm') {
    modalContent = <ModalAddForm />;
  } else if (modalType === 'editForm') {
    modalContent = <ModalEditForm />;
  }

  return (
    <>
      {modalIsOpen && <NotesForm content={modalContent} />}
      <NotesList />
    </>
  );
};

export default NotesContainer;
