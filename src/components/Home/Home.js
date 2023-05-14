import React, { Fragment } from "react";
import { Link as NavLink } from 'react-router-dom'
import homeImage from '../../assets/kevinPortfolio.jpeg'
import classes from './Home.module.css'
import SubCard from "../UI/SubCard";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Fragment>


      <h3>Professional Full Stack Developer</h3>
      <div className={classes['main-image']}>
        <img src={homeImage} alt='literally me!' />
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