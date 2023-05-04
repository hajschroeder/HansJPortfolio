import React, { Fragment } from "react";
import homeImage from '../../assets/kevinPortfolio.jpeg'
import classes from './Home.module.css'

const Home  = ()=> {

  return (
    <Fragment>

      <h1>Home Placeholder</h1>
      <div className={classes['main-image']}>
        <img src={homeImage} alt='literally me!' />
      </div>

    </Fragment>
  )
}

export default Home