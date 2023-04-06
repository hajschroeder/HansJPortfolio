import { Link as NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName= {classes.active} to='/about'>
              AboutNB 
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName= {classes.active} to='/contact'>
              Contact NB  
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName= {classes.active} to='/projects'>
              Projects NB  
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName= {classes.active} to='/home'>
              Home NB
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar 
