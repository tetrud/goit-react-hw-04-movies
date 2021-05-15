import { Link, withRouter } from 'react-router-dom';

import './MoviesList.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className="Movie_list">
      {movies.map(({ id, title }) => (
        <li key={id} className="Movie_item">
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
            className="Movie_link"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
