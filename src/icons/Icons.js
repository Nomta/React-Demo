import React from 'react';
import EditIcon from './edit-icon';
import ErrorIcon from './error-icon';

const Icons = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <EditIcon/>
        <ErrorIcon/>
      </defs>
    </svg>
  );
};

export default Icons;