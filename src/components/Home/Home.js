import React, { Fragment } from "react";
import { Link as NavLink } from 'react-router-dom'
import homeImage from '../../assets/hjs.jpg'
import classes from './Home.module.css'
import SubCard from "../UI/SubCard";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Fragment>
      <div className={classes.home}>
        <h1>Hans J Schroeder</h1>
        <h2>Full Stack Developer</h2>
        <p>Building and creating unique solutions. There is no problem so complex that cannot be solved with creativity.</p>
        <blockquote>
          <p><em>"Leave the world more interesting for you being here."</em></p>
          <footer>Neil Gaiman, author of <i>American Gods</i></footer>
        </blockquote>
      <div className={classes['main-image']}>
        <img src={homeImage} alt='literally me!' />
      </div>

      </div>
      <SubCard>
        <NavLink className={classes.active} to='/about'>
          About
        </NavLink>
      </SubCard>

    </Fragment>
  )
}

export default Home