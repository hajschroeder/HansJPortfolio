import React, { useState, Fragment } from 'react';
import Button from './Button';
import { Link as NavLink} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import * as FaIcons from 'react-icons/fa'
function Navbar() {
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
    <Fragment>
      <nav className='navbar'>
        <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Hans J Schroeder

        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About 
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>

        </ul>

      </nav>
    </Fragment>
  );
}

export default Navbar;
