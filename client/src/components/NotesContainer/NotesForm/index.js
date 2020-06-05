import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { ModalContext } from '../../../context/ModalContext';

const NotesForm = ({ content, title }) => {
  const { modalIsOpen, openModal, closeModal } = useContext(
    ModalContext,
  );
  return (
    <>
      <Modal isOpen={modalIsOpen} toggle={openModal}>
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
      </Modal>
    </>
  );
};

export default NotesForm;
