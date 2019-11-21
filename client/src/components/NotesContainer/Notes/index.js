import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { ModalContext } from '../../../context/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';

const Notes = ({ note }) => {
  const { deleteNote, updateCurrentNote } = useContext(NoteContext);
  const { openModal, changeModalType } = useContext(ModalContext);

  const openModalEditForm = (note) => {
    updateCurrentNote(note);
    changeModalType('editForm');
    openModal();
  };

  return (
    <div className={styles.noteContainer}>
      <div className={styles.header}>
        <h1>{note.title}</h1>
        <div onClick={() => openModalEditForm(note)}>
          <FontAwesomeIcon icon="edit" />
        </div>
        <div onClick={() => deleteNote(note._id)}>
          <FontAwesomeIcon icon="times" />
        </div>
      </div>

      <p>{note.note}</p>
    </div>
  );
};

export default Notes;
