import { Link } from 'react-router-dom';
import classes from './MainNavigiation.module.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> FOOTBAL</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> HomePage</Link>
          </li>
          <li>
            <Link to="/rent-playGround">Rent a playGround</Link>
          </li>
          <li>
            <Link to="/classes">Academy</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
