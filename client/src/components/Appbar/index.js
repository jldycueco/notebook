import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ModalContext } from '../../context/ModalContext';
import styles from './index.module.css';

const AppBar = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className={styles.appBar}>
      <div>Notes</div>
      <div className={styles.spacer} />
      <div>
        <FontAwesomeIcon icon="search" />
      </div>
      <div>
        <FontAwesomeIcon icon="plus" onClick={() => openModal()} />
      </div>
    </div>
  );
};

export default AppBar;
