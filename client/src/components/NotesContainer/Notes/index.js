import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { ModalContext } from '../../../context/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';

import { deleteNote } from '../../../action/noteAction';

const Notes = ({ note }) => {
  const { dispatch, updateCurrentNote } = useContext(NoteContext);
  const { openModal, changeModalType } = useContext(ModalContext);

  const openModalEditForm = (note) => {
    updateCurrentNote(note);
    changeModalType('editForm');
    openModal();
  };

  return (
    <>
      <ListGroupItem>
        <ListGroupItemHeading
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {note.title}
          <div>
            <Button
              onClick={() => openModalEditForm(note)}
              color="dark"
              size="xs"
            >
              <FontAwesomeIcon icon="edit" size="xs" />
            </Button>
            <Button
              onClick={() => deleteNote(note._id, dispatch)}
              color="danger"
              size="xs"
            >
              <FontAwesomeIcon icon="times" size="xs" />
            </Button>
          </div>
        </ListGroupItemHeading>

        <ListGroupItemText>{note.content}</ListGroupItemText>
      </ListGroupItem>
    </>
  );
};

export default Notes;
