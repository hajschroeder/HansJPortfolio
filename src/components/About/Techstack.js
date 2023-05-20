import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import classes from './Techstack.module.css'

const Row = ({ children }) => {
  return <div className={classes.row}>{children}</div>;
};

const Col = ({ size, children }) => {
  const colSize = size ? `col-${size}` : '';
  return <div className={classes[`col ${colSize}`]}>{children}</div>;
};

const Techstack = () => {
  return (
    <div>
      <Row >
        <div className={classes.icons}>
          <Col >
            <MdIcons.MdHtml />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiCss3 />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiJsBadge />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiReact />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiRuby />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiRor />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col>
            <DiIcons.DiGit />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiGithubBadge />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <DiIcons.DiPostgresql />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <SiIcons.SiFirebase />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <SiIcons.SiPostman />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <SiIcons.SiCsharp />
          </Col>
        </div>
        <div className={classes.icons}>
          <Col >
            <SiIcons.SiDotnet />
          </Col>
        </div>

      </Row>
    </div>
  );
};

export default Techstack;


