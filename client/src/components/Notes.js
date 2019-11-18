import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const Notes = ({ note, id }) => {
  const { deleteNote } = useContext(NoteContext);

  return (
    <div>
      <div onClick={() => deleteNote(id)}>{note}</div>
    </div>
  );
};

export default Notes;
