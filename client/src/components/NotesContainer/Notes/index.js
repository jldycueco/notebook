import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';

const Notes = ({ title, note, id }) => {
  const { deleteNote, editNote } = useContext(NoteContext);

  return (
    <div className={styles.noteContainer}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div onClick={() => editNote()}>
          <FontAwesomeIcon icon="edit" />
        </div>
        <div onClick={() => deleteNote(id)}>
          <FontAwesomeIcon icon="times" />
        </div>
      </div>

      <p>{note}</p>
    </div>
  );
};

export default Notes;
