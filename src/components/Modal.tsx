import React from 'react';
import classes from "./Modal.module.css";
import { useNavigate } from 'react-router-dom';

type ModalProps = {
    children : React.ReactNode;
}

const Modal : React.FC <ModalProps> = ({children }) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/");
  }
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
