import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import useForm from '../../../customhooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../Modal';
import styles from './index.module.css';

const NotesForm = () => {
  const { addNote } = useContext(NoteContext);

  const initialValues = { title: '', note: '' };

  const { values, handleChange, resetForm } = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(values);
    resetForm();
  };

  return (
    <div>
      <Modal>
        <form
          onSubmit={handleSubmit}
          className={styles.formContainer}
        >
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="note"
            value={values.note}
            onChange={handleChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon="plus" />
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default NotesForm;
