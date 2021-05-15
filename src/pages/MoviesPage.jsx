import { Component } from 'react';
import queryString from 'query-string';

import moviesApi from '../services/moviesApi';
import SearchMovie from '../components/SearchMovie';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  getQueryFromProps = props => queryString.parse(props.location.search).query;

  componentDidMount() {
    const query = this.getQueryFromProps(this.props);

    if (query) {
      this.searchMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const nextQuery = this.getQueryFromProps(this.props);

    if (prevQuery !== nextQuery) {
      this.searchMovies(nextQuery);
    }
  }

  searchMovies = query => {
    moviesApi
      .getMovieSearch(query)
      .then(results => {
        this.setState({ movies: results });
      })
      .catch(error => console.log(error));
  };

  hendleSubmit = query => {
    const { history } = this.props;

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <>
        <SearchMovie onSubmit={this.hendleSubmit} />
        <MoviesList movies={movies} location={location} />
      </>
    );
  }
}

export default MoviesPage;
