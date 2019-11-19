import React from 'react';
import './App.css';
import NoteContextProvider from './context/NoteContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faEdit,
  faPlus,
  faAngleLeft,
  faSearch,
  faStar,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

import NotesList from './components/NotesList';
import AppBar from './components/Appbar';
import NotesForm from './components/NotesForm';

library.add(
  faEdit,
  faTimes,
  faPlus,
  faAngleLeft,
  faSearch,
  faStar,
  faEllipsisV,
);

function App() {
  return (
    <div>
      <NoteContextProvider>
        <AppBar />
        <NotesForm />
        <NotesList />
      </NoteContextProvider>
    </div>
  );
}

export default App;
