import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get('/movies');
        setTrending(res.data.slice(0, 8)); 
      } catch (err) { console.error(err); } 
      finally { setLoading(false); }
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '16px' }}>
          Trending <span style={{ color: 'var(--primary)' }}>Movies</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Experience cinema at its finest.</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', color: '#fff' }}>Loading content...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
          {trending.map(movie => (
            <Link key={movie._id} to={`/movies/${movie._id}`} style={{ textDecoration: 'none' }}>
              <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden', transition: '0.3s' }}>
                <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#fff' }}>{movie.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary)', fontSize: '0.9rem' }}>
                    <span>⭐ {movie.rating || 'N/A'}</span>
                    <span>Book Now →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;