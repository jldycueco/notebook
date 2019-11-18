import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import useForm from '../customhooks/useForm';

const NotesForm = () => {
  const { addNote } = useContext(NoteContext);

  const initialValues = '';

  const { values, handleChange, resetForm } = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(values);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="note"
          value={values}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NotesForm;
