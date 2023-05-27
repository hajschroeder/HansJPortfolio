import { Link as NavLink } from 'react-router-dom';
import React, { useState } from 'react'
import Dropdown from './Dropdown';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <header className={classes.header}>
      <NavLink to='/' onClick={closeMobileMenu}>
        <h1>Hans J Schroeder</h1>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink className={classes.active} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.active} to='/contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.active} to='/projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.active} to='/home'>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar 
