import React, { Fragment } from "react"
import classes from './Projects.module.css'
import Card from "../UI/Card"
import * as DiIcons from 'react-icons/di'
// import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'

const Row = ({ children }) => {
  return <div className={classes.row}>{children}</div>;
};

const Col = ({ size, children }) => {
  const colSize = size ? `col-${size}` : '';
  return <div className={classes[`col ${colSize}`]}>{children}</div>;
};

const Projects = (props) => {
  return (
    <Fragment>
      <div className={classes.about}>
        <h2>Projects</h2>
      </div>
      <Card className={props.children}>
        <ul>
          <h3>Music Tutor (WIP)</h3>
          <a href="https://github.com/hajschroeder/react-music-tutor-beta/" target="_blank" rel="noreferrer">Github</a>{" "}
          <p>An education App built around teaching people to read sheet music. The idea behind this was to create a template for future education-based apps.</p>
          <h3>Built With</h3>
          <Row>
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
          </Row>
        </ul>
      </Card>
      <Card>
        <ul>
          <h3>Office Scheduler (WIP)</h3>
          <a href="https://github.com/hajschroeder/office-scheduler" target="_blank" rel="noreferrer">Github</a>{" "}
          <p>This was my Capstone project for the coding boot camp Epicodus. This was an application for workers to post their daily and weekly statuses in order to let coworkers know if they are in the office or working remotely, when they are at lunch or unavailable, and whether on not they have an 'open door'. </p>
          <h3>Tech</h3>
          <Row>
            <div className={classes.icons}>
              <Col >
                <DiIcons.DiReact />
              </Col>
            </div>
            <div className={classes.icons}>
              <Col >
                <SiIcons.SiFirebase />
              </Col>
            </div>
          </Row>
        </ul>
      </Card>
      <Card>
        <ul>
          <h3>PNW Mutual Aid API</h3>
          <a href="https://github.com/hajschroeder/PNW-Mutual-Aid-API" target="_blank" rel="noreferrer">Github</a>{" "}
          <p>Built with Ruby on Rails and using PostgreSQL for our databse, this was a Team Week project for Epicodus. We built an API and populated a database with information related to community programs and resources within the Pacific Northwest.</p>
          <h3>Tech</h3>
          <Row>
            <div className={classes.icons}>
                <Col >
                  <DiIcons.DiRor />
                </Col>
              </div>
              <div className={classes.icons}>
              <Col >
                <DiIcons.DiPostgresql />
              </Col>
            </div>
          </Row>
        </ul>
      </Card>
    </Fragment>
  )
}

export default Projects