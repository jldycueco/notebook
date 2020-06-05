import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { ModalContext } from '../../../context/ModalContext';
import useForm from '../../../customhooks/useForm';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { editNote } from '../../../action/noteAction';

export default function ModalEditForm() {
  const { noteId, currentNote, dispatch } = useContext(NoteContext);
  const { closeModal } = useContext(ModalContext);

  const { values, handleChange, resetForm } = useForm(currentNote);

  const handleSubmit = (event) => {
    event.preventDefault();
    editNote(noteId, values, dispatch);
    resetForm();
    closeModal();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            name="content"
            value={values.content}
            onChange={handleChange}
            style={{ height: '150px' }}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
