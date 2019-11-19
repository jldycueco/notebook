import React, { createContext, useState } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (values) => {
    const postData = { title: values.title, note: values.note };
    axios
      .post('/note', postData)
      .then((res) => setNotes([...notes, res.data]))
      .catch((err) => console.log(err));
  };

  const deleteNote = (_id) => {
    axios
      .delete(`/note/${_id}`)
      .then((res) =>
        setNotes(notes.filter((note) => note._id !== _id)),
      )
      .catch((err) => console.log(err));
  };

  const editNote = () => {
    console.log('edited');
  };

  return (
    <div>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, deleteNote, editNote }}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteContextProvider;
