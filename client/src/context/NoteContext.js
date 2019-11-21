import React, { createContext, useState } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    title: '',
    note: '',
  });
  const [noteId, setNoteId] = useState('');

  const getAllNotes = () => {
    axios
      .get('/note')
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addNote = (addedNote) => {
    const postData = { title: addedNote.title, note: addedNote.note };
    axios
      .post('/note', postData)
      .then((res) => {
        setNotes([...notes, res.data]);
      })
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

  const getNote = (_id) => {
    axios
      .get(`/note/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const editNote = (_id, updatedNotes) => {
    const postData = {
      title: updatedNotes.title,
      note: updatedNotes.note,
      _id: _id,
    };
    axios
      .put(`/note/${_id}`, postData)
      .then((res) =>
        setNotes(
          notes.map((note) =>
            note._id === _id ? updatedNotes : note,
          ),
        ),
      )
      .catch((err) => console.log(err));
  };

  const updateCurrentNote = (note) => {
    setNoteId(note._id);
    setCurrentNote({
      title: note.title,
      note: note.note,
    });
  };

  return (
    <div>
      <NoteContext.Provider
        value={{
          notes,
          getAllNotes,
          addNote,
          deleteNote,
          getNote,
          editNote,
          noteId,
          currentNote,
          updateCurrentNote,
        }}
      >
        {children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteContextProvider;
