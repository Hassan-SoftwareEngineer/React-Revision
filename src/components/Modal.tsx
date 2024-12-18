import React, { useState } from 'react';
import classes from "./Modal.module.css";

type ModalProps = {
    children : React.ReactNode;
    onClose : () => void;
}

const Modal : React.FC <ModalProps> = ({children, onClose }) => {


  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick = {onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </React.Fragment>
  )
}

export default Modal;
