import Card from '../UI/Card';
import Modal from '../UI/Modal';
import classes from './Contact.module.css'
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
// import wellFound from '../../assets/wellFound.ico'
// import * as RxIcons from 'react-icons/rx'
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SubCard from '../UI/SubCard';

const Contact = () => {


  const [isCopiedState, setIsCopiedState] = useState(false);
  const [modalState, setModalState] = useState();
  const email = 'hajschroeder@gmail.com'
  const copyHandler = (copyEvent) => {
    copyEvent.preventDefault();
    setModalState({
      title: 'Drop me a line!',
      message: 'Email Copied to Clipboard',
      isCopiedState
    });
    return;
  }
  const modalHandler = () => {
    setModalState(null)
  }
  return (
    <div>
      {modalState && (
        <Modal
          title={modalState.title}
          message={modalState.message}
          onModalHandler={modalHandler}
        />
      )}
      <div className={classes.about}>
        <h2>Contact</h2>
        <Card>
          <SubCard>
          <div className={classes.icons}>
            <a href="https://github.com/hajschroeder" target="_blank" rel="noreferrer">
              <FaIcons.FaGithub />
            </a>{" "}
            </div>
            <p>Github</p>
            </SubCard>
            <SubCard>
          <div className={classes.icons}>
            <a href="https://www.linkedin.com/in/hans-j-schroeder/" target="_blank" rel="noreferrer">
              <FaIcons.FaLinkedin />
            </a>{" "}
            </div>
            <p>LinkedIn</p>
            </SubCard>
            {/* <SubCard>
              <div className={classes.icon}>
              <img src={wellFound} alt='literally me!' />

              </div>
            </SubCard> */}
            <SubCard>
            <div className={classes.icons}>
              <CopyToClipboard text={email} onCopy={() => setIsCopiedState(true)}>
                <a href={email} onClick={copyHandler}>
                  <MdIcons.MdAlternateEmail />

                </a>
              </CopyToClipboard>
              {/* <RxIcons.RxCopy /> */}
            </div>
              <p>Email Me</p>
            </SubCard>
        </Card>
      </div>
    </div>
  )
}

export default Contact