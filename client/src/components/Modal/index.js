import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import { ModalContext } from '../../context/ModalContext';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <aside className={styles.modalOverlay}>
        <div className={styles.modal}>{children}</div>
      </aside>
    </>,
    document.body,
  );
};

export default Modal;
