import React, { Fragment } from 'react';
import classes from './About.module.css';
import Card from '../UI/Card';
import SubCard from '../UI/SubCard';
import PdfResume from '../../assets/ResumeMay23.pdf'
import PdfModal from '../UI/PdfModal';
import Techstack from './Techstack';



const About = () => {
  const resume = PdfResume
  return (
    <Fragment>
      <div className={classes.about}>
        <h2>About</h2>
        <Card>
          <p>Hey! I'm Hans, and I'm a professional full-stack web and software developer based out of beautiful Portland, Oregon.<br /><br />Possessing a highly ecclectic background, I am able to take a unique and rich approach to writing code and collaborating on projects. With the creativity of a musician, the problem solving skills of a mechanic, and the organization of a Letter Carrier, I am able to bring a unique quality efficiency and perspective to all projects which I contribute</p>
          <PdfModal file={resume} />
        </Card>
      </div>
      <SubCard>
        <h3>Tech Stack</h3>
      </SubCard>
      <Techstack />
    </Fragment>

  );
};

export default About;

