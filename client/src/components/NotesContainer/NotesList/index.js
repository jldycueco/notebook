import React, { useContext, useEffect } from 'react';
import Notes from '../Notes/index';
import { NoteContext } from '../../../context/NoteContext';
import { ListGroup } from 'reactstrap';

import { getAllNotes } from '../../../action/noteAction';

const NotesList = () => {
  const { notes, dispatch } = useContext(NoteContext);

  useEffect(() => {
    getAllNotes(dispatch);
  }, [dispatch]);

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
