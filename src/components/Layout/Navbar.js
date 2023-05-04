import { Link as NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className= {classes.active} to='/about'>
              About 
            </NavLink>
          </li>
          <li>
            <NavLink className= {classes.active} to='/contact'>
              Contact  
            </NavLink>
          </li>
          <li>
            <NavLink className= {classes.active} to='/projects'>
              Projects  
            </NavLink>
          </li>
          <li>
            <NavLink className= {classes.active} to='/home'>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar 
