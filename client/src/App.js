import React from 'react';
import NoteContextProvider from './context/NoteContext';
import ModalContextProvider from './context/ModalContext';
import { Container, Row, Col } from 'reactstrap';
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
    <>
      <NoteContextProvider>
        <ModalContextProvider>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AppBar />
                <NotesContainer />
              </Col>
            </Row>
          </Container>
        </ModalContextProvider>
      </NoteContextProvider>
    </>
  );
}

export default App;
