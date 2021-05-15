import { Component } from 'react';

import moviesApi from '../services/moviesApi';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const results = await moviesApi.getMoviesTrending();
      this.setState({ movies: results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
