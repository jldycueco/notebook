import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import { ModalContext } from '../../context/ModalContext';

const Modal = ({ children }) => {
  const { backdrop } = useContext(ModalContext);

  return ReactDOM.createPortal(
    <>
      <aside className={styles.modalOverlay}>
        <div className={styles.modal}>{children}</div>
      </aside>
      {backdrop}
    </>,
    document.body,
  );
};

export default Modal;
