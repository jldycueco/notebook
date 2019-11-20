import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { ModalContext } from '../../../context/ModalContext';
import useForm from '../../../customhooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../Modal';
import styles from './index.module.css';

const NotesForm = () => {
  const { addNote } = useContext(NoteContext);
  const { closeModal } = useContext(ModalContext);

  const initialValues = { title: '', note: '' };

  const { values, handleChange, resetForm } = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(values);
    resetForm();
    closeModal();
  };

  return (
    <div>
      <Modal>
        <div className={styles.header}>
          <h1>Add Note</h1>
          <FontAwesomeIcon
            icon="times"
            onClick={() => closeModal()}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.formContainer}
        >
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
      </Modal>
    </div>
  );
};

export default NotesForm;
