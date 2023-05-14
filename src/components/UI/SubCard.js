import React from 'react';

import classes from './SubCard.module.css';

const SubCard = (props) => {
  return <div className={`${classes.subcard} ${props.className}`}>{props.children}</div>;
};

export default SubCard;