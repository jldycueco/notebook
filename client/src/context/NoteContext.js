import React, { createContext, useState } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    title: '',
    content: '',
  });
  const [noteId, setNoteId] = useState('');

  const getAllNotes = () => {
    axios
      .get('/api/note')
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addNote = (addedNote) => {
    const { title, content } = addedNote;

    const postData = { title, content };
    axios
      .post('/api/note', postData)
      .then((res) => {
        setNotes([...notes, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    axios
      .delete(`/api/note/${id}`)
      .then((res) =>
        setNotes(notes.filter((note) => note._id !== id)),
      )
      .catch((err) => console.log(err));
  };

  const getNote = (id) => {
    axios
      .get(`/api/note/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const editNote = (id, updatedNotes) => {
    const { title, content } = updatedNotes;

    const postData = {
      title,
      content,
      id,
    };
    axios.put(`/api/note/${id}`, postData).then(
      axios
        .get('/api/note')
        .then((res) => {
          setNotes(res.data);
        })
        .catch((err) => console.log(err)),
    );
  };

  const updateCurrentNote = (note) => {
    const { _id, title, content } = note;

    setNoteId(_id);
    setCurrentNote({
      title,
      content,
    });
  };

  const value = {
    notes,
    setNotes,
    getAllNotes,
    addNote,
    deleteNote,
    getNote,
    editNote,
    noteId,
    currentNote,
    updateCurrentNote,
  };

  return (
    <div>
      <NoteContext.Provider value={value}>
        {children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteContextProvider;
