import React, { div } from 'react';
import classes from './Modal.module.css'
import Card from './Card';

const Modal = (props) => {

  return (
    <div onClick={props.onModalHandler}>
      <div className={classes.backdrop}/>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.footer}>

            {/* <button onClick={props.onModalHandler}>Got it!</button> */}
          </footer>
        </Card>
      
    </div>
  )
}

export default Modal;