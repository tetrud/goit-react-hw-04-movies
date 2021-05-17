import './InformationNav.scss';
const { NavLink, withRouter } = require('react-router-dom');

const InformationNav = ({ url, location }) => {
  return (
    <div className="Information">
      <h3>Additional information</h3>
      <ul className="Information_list">
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state.from,
              },
            }}
            className="Information_link"
            activeClassName="Information_link--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state.from,
              },
            }}
            className="Information_link"
            activeClassName="Information_link--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(InformationNav);
