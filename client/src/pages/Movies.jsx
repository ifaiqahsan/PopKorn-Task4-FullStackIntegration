import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import MoviePoster from '../components/MoviePoster';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeLanguage, setActiveLanguage] = useState('All');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('popkorn_favorites') || '[]'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await api.get('/movies', {
          params: { search: searchTerm, genre: activeGenre, language: activeLanguage }
        });
        setMovies(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Unable to load movies right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, activeGenre, activeLanguage]);

  const genres = ['All', 'Action', 'Drama', 'Sci-Fi', 'Thriller'];
  const languages = ['All', 'English', 'Korean'];
  const filteredMovies = movies;

  const toggleFavorite = (movieId) => {
    const updated = favorites.includes(movieId)
      ? favorites.filter((id) => id !== movieId)
      : [...favorites, movieId];
    setFavorites(updated);
    localStorage.setItem('popkorn_favorites', JSON.stringify(updated));
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '40px auto', padding: '0 24px', paddingBottom: '100px' }}>
      
      {/* Title & Search Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '6px' }}>
            All <span style={{ color: 'var(--primary)' }}>Movies</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>{filteredMovies.length} movies currently playing</p>
        </div>

        <input 
          type="text" 
          placeholder="Search movies..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-panel"
          style={{ width: '100%', maxWidth: '450px', padding: '14px 20px', borderRadius: '10px', border: '1px solid var(--glass-border)', color: '#fff' }}
        />

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {genres.map(genre => (
            <button 
              key={genre}
              onClick={() => setActiveGenre(genre)}
              style={{
                padding: '8px 18px', borderRadius: '20px', border: '1px solid',
                borderColor: activeGenre === genre ? 'var(--primary)' : 'var(--glass-border)',
                background: activeGenre === genre ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                color: '#fff', cursor: 'pointer', fontWeight: '600'
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {languages.map(language => (
            <button
              key={language}
              onClick={() => setActiveLanguage(language)}
              style={{
                padding: '8px 16px', borderRadius: '20px', border: '1px solid',
                borderColor: activeLanguage === language ? 'var(--primary)' : 'var(--glass-border)',
                background: activeLanguage === language ? 'rgba(229,9,20,0.16)' : 'rgba(255,255,255,0.03)',
                color: '#fff', cursor: 'pointer', fontWeight: '600'
              }}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas */}
      {error && <p style={{ color: '#f87171', marginBottom: '20px' }}>{error}</p>}

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="glass-panel" style={{ borderRadius: '16px', height: '420px', background: 'rgba(255,255,255,0.03)' }} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
          {filteredMovies.map(movie => (
            <div key={movie._id} className="glass-panel cinema-card" style={{ borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: '370px', background: '#121218', position: 'relative' }}>
                <MoviePoster src={movie.posterUrl} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', padding: '4px 10px', borderRadius: '30px', fontSize: '0.8rem', fontWeight: '700', color: '#fbbf24' }}>
                  ⭐ {movie.rating}
                </span>
                <button onClick={() => toggleFavorite(movie._id)} style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.75)', border: 'none', color: favorites.includes(movie._id) ? '#f87171' : '#fff', borderRadius: '999px', padding: '6px 10px', cursor: 'pointer' }}>
                  {favorites.includes(movie._id) ? '♥' : '♡'}
                </button>
              </div>
              <div style={{ padding: '20px' }}>
                <h3>{movie.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>{movie.genre} • {movie.language}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '10px' }}>{movie.description?.slice(0, 80)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to={`/movies/${movie._id}`} style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>Book Tickets →</Link>
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>PKR {Number(movie.pricePerSeat || 0).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;