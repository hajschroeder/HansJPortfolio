import React, { Fragment } from "react"
import Card from "../Layout/Card"

const Projects = () =>{
  return (
    <Fragment>
    <div>
      <h2>Projects Placeholder</h2>
    </div>
      <Card>
        <ul>
          <li><h3>Music Tutor (WIP)</h3></li>
          <li><a href="https://github.com/hajschroeder/react-music-tutor-beta">Github</a></li>
          <li></li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li><h3>Office Scheduler (WIP)</h3></li>
          <li><a href="https://github.com/hajschroeder/office-scheduler">Github</a></li>
          <li></li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li><h3>Animal Shelter AP</h3></li>
          <li><a href="https://github.com/hajschroeder/animal_shelter_api">Github</a></li>
          <li></li>
        </ul>
      </Card>
    </Fragment>
  )
}

export default Projects