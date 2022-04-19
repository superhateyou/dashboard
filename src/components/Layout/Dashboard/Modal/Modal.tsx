import React, { Children } from 'react';
import './Modal.css';

function Modal({ active, setActive, children } : any) {
  return (
    <div
      role="button"
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        role="button"
        className={active ? 'modalContent active' : 'modalContent'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
