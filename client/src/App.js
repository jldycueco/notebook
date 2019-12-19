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
import SearchContextProvider from './context/SearchContext';

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
      <SearchContextProvider>
        <NoteContextProvider>
          <ModalContextProvider>
            <div className={styles.AppContainer}>
              <div className={styles.App}>
                <AppBar />
                <NotesContainer />
              </div>
            </div>
          </ModalContextProvider>
        </NoteContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
