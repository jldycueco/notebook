import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div>Notes</div>
      <div className={styles.spacer} />
      <div>
        <FontAwesomeIcon icon="search" />
      </div>
      <div>
        <FontAwesomeIcon icon="plus" />
      </div>
    </div>
  );
};

export default AppBar;
