import { Link as NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/'>
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
