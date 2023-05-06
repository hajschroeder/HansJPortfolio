import Card from '../Layout/Card';
import Modal from '../Layout/Modal';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RxIcons from 'react-icons/rx'
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Contact = () => {


  const [isCopiedState, setIsCopiedState] = useState(false);
  const [modalState, setModalState] = useState();
  const email = 'email@todayisfun.com'
  const copyHandler = (copyEvent) => {
    copyEvent.preventDefault();
          setModalState({
            title: 'Success',
            message: 'Email Copied to Clipboard'
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
    <div>
    <h2>Contact</h2>
      <Card>
        <ul>
          <li>
            <FaIcons.FaGithub />
            <a href="https://github.com/hajschroeder">Github</a>
          </li>
          <li>
            <div>
            <MdIcons.MdAlternateEmail />
            <CopyToClipboard text={email} onCopy={()=> setIsCopiedState(true)}>
              <a href={email} onClick={copyHandler}>email</a>
            </CopyToClipboard>
              {/* <RxIcons.RxCopy /> */}
            </div>

          </li>
        </ul>
      </Card>
    </div>
    </div>
    )
}

export default Contact