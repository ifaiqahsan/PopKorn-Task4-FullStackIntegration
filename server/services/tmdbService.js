const axios = require('axios');

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const getNowPlaying = async () => {
  const url = `${TMDB_BASE}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  const { data } = await axios.get(url);
  return data.results.map((movie) => ({
    ...movie,
    poster_path: movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : null
  }));
};

const getMovieDetails = async (id) => {
  const url = `${TMDB_BASE}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return {
    ...data,
    poster_path: data.poster_path ? `${TMDB_IMAGE_BASE}${data.poster_path}` : null
  };
};

module.exports = { getNowPlaying, getMovieDetails };