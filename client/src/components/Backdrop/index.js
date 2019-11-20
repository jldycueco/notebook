import React from 'react';
import './index.css';

const Backdrop = ({ click }) => (
  <div className="backdrop" onClick={click} />
);

export default Backdrop;
