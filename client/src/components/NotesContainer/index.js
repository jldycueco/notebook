import React, { useContext } from 'react';
import NotesList from './NotesList/';
import NotesForm from './NotesForm/';
import { ModalContext } from '../../context/ModalContext';

const NotesContainer = () => {
  const { modalIsOpen } = useContext(ModalContext);

  return (
    <>
      {modalIsOpen && <NotesForm />}
      <NotesList />
    </>
  );
};

export default NotesContainer;
