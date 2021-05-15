import './InformationNav.scss';
const { NavLink } = require('react-router-dom');

const InformationNav = ({ url }) => {
  return (
    <div className="Information">
      <h3>Additional information</h3>
      <ul className="Information_list">
        <li>
          <NavLink
            to={`${url}/cast`}
            className="Information_link"
            activeClassName="Information_link--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
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

export default InformationNav;
