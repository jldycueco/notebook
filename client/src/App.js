import React from 'react';
import styles from './App.module.css';
import NoteContextProvider from './context/NoteContext';
import ModalContextProvider from './context/ModalContext';

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

import AppBar from './components/Appbar';
import NotesContainer from './components/NotesContainer';

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
      <ModalContextProvider>
        <NoteContextProvider>
          <div className={styles.AppContainer}>
            <div className={styles.App}>
              <AppBar />
              <NotesContainer />
            </div>
          </div>
        </NoteContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
