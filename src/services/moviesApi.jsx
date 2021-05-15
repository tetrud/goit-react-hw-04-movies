import { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5d00ab010962c02d4406a860281c88bd';

class MoviesApi extends Component {
  getMoviesTrending = () => {
    return axios
      .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
      .then(response => response.data.results);
  };

  getMovieSearch = query => {
    return axios
      .get(
        `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
      )
      .then(response => response.data.results);
  };

  getMovieDetails = movieId => {
    return axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.data);
  };

  getMovieCast = movieId => {
    return axios
      .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.data.cast);
  };

  getMovieReviews = movieId => {
    return axios
      .get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      )
      .then(response => response.data.results);
  };
}

const moviesApi = new MoviesApi();
export default moviesApi;
