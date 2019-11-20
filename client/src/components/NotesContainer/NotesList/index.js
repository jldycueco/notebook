import React, { useContext, useEffect } from 'react';
import Notes from '../Notes/index';
import { NoteContext } from '../../../context/NoteContext';
import axios from 'axios';

import styles from './index.module.css';

const NotesList = () => {
  const { notes, setNotes } = useContext(NoteContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('/note');
        if (result.data) {
          setNotes(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [setNotes]);

  return (
    <div className={styles.notesListContainer}>
      {notes &&
        notes.map((note) => (
          <Notes
            key={note._id}
            title={note.title}
            note={note.note}
            id={note._id}
          />
        ))}
    </div>
  );
};

export default NotesList;
