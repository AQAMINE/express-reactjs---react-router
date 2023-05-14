import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/events" end>Events</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/events/:id">Event detail page</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/events/new" end>New event page</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/events/:id/edit" >Edit event page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
