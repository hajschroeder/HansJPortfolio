import React, { Fragment } from "react"
import Card from "../UI/Card"

const Projects = (props) =>{
  return (
    <Fragment>
    <div>
      <h2>Projects</h2>
    </div>
      <Card className={props.children}>
        <ul>
          <h3>Music Tutor (WIP)</h3>
          <a href="https://github.com/hajschroeder/react-music-tutor-beta">Github</a>
          <p>An education App built around teaching people to read sheet music. The idea behind this was to create a template for future education-based apps. Built with React</p>
        </ul>
      </Card>
      <Card>
        <ul>
          <h3>Office Scheduler (WIP)</h3>
          <a href="https://github.com/hajschroeder/office-scheduler">Github</a>
          <p>Built with React, this was my Capstone project for the coding boot camp Epicodus. This was an application for workers to post their daily and weekly statuses in order to let coworkers know if they are in the office or working remotely, when they are at lunch or unavailable, and whether on not they have an 'open door'. </p>
        </ul>
      </Card>
      <Card>
        <ul>
          <h3>PNW Mutual Aid API</h3>
          <a href="https://github.com/hajschroeder/PNW-Mutual-Aid-API">Github</a>
          <p>Built with Ruby on Rails and using PostgreSQL for our databse, this was a Team Week project for Epicodus. We built an API and populated a database with information related to community programs and resources within the Pacific Northwest.</p>
        </ul>
      </Card>
    </Fragment>
  )
}

export default Projects