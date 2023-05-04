import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import classes from './About.module.css';

const About = () => {
  const [inProp, setInProp] = useState(true);

  return (
    <div>
      <Transition in={inProp} timeout={2000}>
        {(state) => (
          <div className={`${classes.fade} ${state === 'entering' ? classes.fadeEnter : state === 'entered' ? classes.fadeEnterActive : state === 'exiting' ? classes.fadeExit : ''}`}>
            <h2>About Placeholder</h2>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default About;

