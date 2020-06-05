import React, { useContext } from 'react';
import NotesList from './NotesList/';
import NotesForm from './NotesForm/';
import { ModalContext } from '../../context/ModalContext';
import ModalAddForm from '../Modal/ModalAddForm';
import ModalEditForm from '../Modal/ModalEditForm';

const NotesContainer = () => {
  const { modalIsOpen, modalType } = useContext(ModalContext);
  let modalContent;
  let title;

  if (modalType === 'addForm') {
    modalContent = <ModalAddForm />;
    title = 'Add Content';
  } else if (modalType === 'editForm') {
    modalContent = <ModalEditForm />;
    title = 'Edit Content';
  }

  return (
    <>
      {modalIsOpen && (
        <NotesForm content={modalContent} title={title} />
      )}
      <NotesList />
    </>
  );
};

export default NotesContainer;
