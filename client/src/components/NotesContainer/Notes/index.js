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

const Notes = ({ note }) => {
  const { deleteNote, updateCurrentNote } = useContext(NoteContext);
  const { openModal, changeModalType } = useContext(ModalContext);

  const openModalEditForm = (note) => {
    updateCurrentNote(note);
    changeModalType('editForm');
    openModal();
  };

  return (
    <>
      <ListGroupItem>
        <ListGroupItemHeading>
          {note.title}

          <Button
            onClick={() => openModalEditForm(note)}
            color="dark"
            size="xs"
          >
            <FontAwesomeIcon icon="edit" />
          </Button>
          <Button
            onClick={() => deleteNote(note._id)}
            color="danger"
            size="xs"
          >
            <FontAwesomeIcon icon="times" />
          </Button>
        </ListGroupItemHeading>

        <ListGroupItemText>{note.content}</ListGroupItemText>
      </ListGroupItem>
    </>
  );
};

export default Notes;
