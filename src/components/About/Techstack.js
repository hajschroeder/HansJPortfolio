import React from 'react';
import * as FaIcons from 'react-icons/fa';
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
            <SiIcons.SiPostman />
          </Col>
        </div>

      </Row>
    </div>
  );
};

export default Techstack;


// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
// } from "react-icons/di";
// import {
//   SiPytorch,
//   SiFirebase,
//   SiNextdotjs,
// } from "react-icons/si";
// import classes from './About.module.css'
// import Card from "../Layout/Card";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <DiJavascript1 alt='javacript'/>
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className={classes["tech-icons"]}>
//         <SiPytorch />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;
