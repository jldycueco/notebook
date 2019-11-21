import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ModalContext } from '../../context/ModalContext';
import styles from './index.module.css';
import SearchBar from './SearchBar';

const AppBar = () => {
  const { openModal, changeModalType } = useContext(ModalContext);

  const openModalAddForm = () => {
    openModal();
    changeModalType('addForm');
  };

  return (
    <div className={styles.appBar}>
      <div>Notes</div>
      <div className={styles.spacer} />
      <div>
        <SearchBar />
      </div>
      <div>
        <FontAwesomeIcon icon="plus" onClick={openModalAddForm} />
      </div>
    </div>
  );
};

export default AppBar;
