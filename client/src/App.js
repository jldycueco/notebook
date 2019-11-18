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
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEdit, faTimes, faPlus, faAngleLeft, faSearch, faStar);

function App() {
  return (
    <div>
      <NoteContextProvider>
        <FontAwesomeIcon icon="times" />
        <FontAwesomeIcon icon="edit" />
        <FontAwesomeIcon icon="plus" />
        <FontAwesomeIcon icon="angle-left" />
        <FontAwesomeIcon icon="search" />
        <FontAwesomeIcon icon="star" />
      </NoteContextProvider>
    </div>
  );
}

export default App;
