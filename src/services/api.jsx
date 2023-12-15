import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ1YTNiMDA0YTI4ZTY4NjhhZDQwNGM0NWQ1MTlkZCIsInN1YiI6IjY1NzlmOTk3MzVhNjFlMDBjNjM0ZmM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CCosXGVjZz55nO_JTqKDBkDbWsH7hD_JrUt0GD4mDBM',
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('/3/trending/movie/day?language=en-US');
  return data.results;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios.get(`3/search/movie?query=${query}`);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`3/movie/${movieId}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}/credits`);
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}/reviews`);
  return data.results;
};
