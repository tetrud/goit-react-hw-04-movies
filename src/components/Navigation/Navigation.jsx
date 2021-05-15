import routes from '../../routes';
import './Navigation.scss';

const { NavLink } = require('react-router-dom');

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="Navigation_link"
        activeClassName="Navigation_link--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className="Navigation_link"
        activeClassName="Navigation_link--active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
