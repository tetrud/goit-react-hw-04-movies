import { Component } from 'react';

import moviesApi from '../../services/moviesApi';
import './Cast.scss';

class Cast extends Component {
  state = {
    moviesCast: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    moviesApi
      .getMovieCast(movieId)
      .then(cast =>
        this.setState({
          moviesCast: [...cast],
        }),
      )
      .catch(error => console.log(error));
  }

  render() {
    const { moviesCast } = this.state;

    return (
      <div className="MovieCast">
        {moviesCast.length > 0 ? (
          <ul className="MovieCast_list">
            {moviesCast.map(({ id, name, profile_path, character }) => (
              <li key={id} className="MovieCast_item">
                <img
                  src={
                    profile_path &&
                    `https://image.tmdb.org/t/p/w200${profile_path}`
                  }
                  alt={`Photo_actor ${name}`}
                />
                <p className="MovieCast_name">{name}</p>
                <p className="MovieCast_character">{character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any cast for this movie</h3>
        )}
      </div>
    );
  }
}

export default Cast;
