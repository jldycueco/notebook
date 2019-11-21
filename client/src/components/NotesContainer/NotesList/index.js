import React, { useContext, useEffect } from 'react';
import Notes from '../Notes/index';
import { NoteContext } from '../../../context/NoteContext';

import styles from './index.module.css';

const NotesList = () => {
  const { notes, getAllNotes } = useContext(NoteContext);

  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  return (
    <div className={styles.notesListContainer}>
      {notes &&
        notes.map((note) => <Notes key={note._id} note={note} />)}
    </div>
  );
};

export default NotesList;
