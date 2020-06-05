import React, { useContext, useEffect } from 'react';
import Notes from '../Notes/index';
import { NoteContext } from '../../../context/NoteContext';
import { ListGroup } from 'reactstrap';

const NotesList = () => {
  const { notes, getAllNotes } = useContext(NoteContext);

  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  return (
    <>
      {notes && (
        <ListGroup>
          {notes.map((note) => (
            <Notes key={note._id} note={note} />
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default NotesList;
