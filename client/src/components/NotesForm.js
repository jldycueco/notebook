import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import useForm from '../customhooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default NotesForm;