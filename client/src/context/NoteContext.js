import React, { createContext, useState, useReducer } from 'react';
import noteReducer from '../reducer/noteReducer';

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [currentNote, setCurrentNote] = useState({
    title: '',
    content: '',
  });

  const [noteId, setNoteId] = useState('');

  const updateCurrentNote = (note) => {
    const { _id, title, content } = note;

    setNoteId(_id);
    setCurrentNote({
      title,
      content,
    });
  };

  const initialState = {
    notes: [],
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  const value = {
    notes: state.notes,
    dispatch,
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
