import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

import { ModalContext } from '../../context/ModalContext';

const AppBar = () => {
  const { openModal, changeModalType } = useContext(ModalContext);

  const openModalAddForm = () => {
    openModal();
    changeModalType('addForm');
  };

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">NotebookApp</NavbarBrand>
        <Nav className="mr-auto" navbar />
        <NavbarBrand href="#" onClick={openModalAddForm}>
          Add Notes <FontAwesomeIcon icon="plus" />
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default AppBar;
