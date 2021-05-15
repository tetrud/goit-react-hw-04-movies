import PropTypes from 'prop-types';
import './MovieDetails.scss';

const MovieDetails = ({ title, poster, vote, overview, genres, year }) => {
  return (
    <div className="MovieDetails">
      <img
        src={poster && `https://image.tmdb.org/t/p/w300${poster}`}
        alt={`Poster: ${title}`}
        className="MovieDetails_img"
      />
      <div className="MovieDetails_desc">
        <h2 className="MovieDetails_title">
          {title} ({year})
        </h2>
        <p>User Score: {vote * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className="MovieDetails_list">
          {genres &&
            genres.map(({ id, name }) => (
              <li key={id} className="MovieDetails_item">
                <p>{name}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  vote: PropTypes.number,
  overview: PropTypes.string,
  year: PropTypes.number,
};

export default MovieDetails;
