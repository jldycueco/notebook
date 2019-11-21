import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { ModalContext } from '../../../context/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useForm from '../../../customhooks/useForm';
import styles from './index.module.css';

export default function ModalEditForm() {
  const { editNote, noteId, currentNote } = useContext(NoteContext);
  const { closeModal } = useContext(ModalContext);

  const { values, handleChange, resetForm } = useForm(currentNote);

  const handleSubmit = (event) => {
    event.preventDefault();
    editNote(noteId, values);
    resetForm();
    closeModal();
  };

  return (
    <>
      <div className={styles.header}>
        <h1>Edit Note</h1>
        <FontAwesomeIcon icon="times" onClick={() => closeModal()} />
      </div>

      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <label>Content</label>
        <textarea
          type="text"
          name="note"
          value={values.note}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
