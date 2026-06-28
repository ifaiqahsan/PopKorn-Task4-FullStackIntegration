import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="glass-panel" style={{
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, border-color 0.3s ease'
    }}>
      
      {/* Poster Image Frame */}
      <div style={{ height: '320px', width: '100%', overflow: 'hidden', background: '#121218', position: 'relative' }}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', color: '#fbbf24' }}>
          ★ {movie.rating}
        </div>
      </div>

      {/* Card Body Metadata */}
      <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 4px 0' }}>{movie.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0 0 12px 0' }}>{movie.genre} • {movie.duration}</p>
          
          {/* Seat Progress Gauge */}
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span>Theater Filling</span>
            <span>65%</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: 'var(--primary)' }} />
          </div>
        </div>

        {/* CTA Pass Link */}
        <Link to={`/movies/${movie._id}`} style={{ textDecoration: 'none' }}>
          <button className="btn-primary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}>
            Book Tickets
          </button>
        </Link>
      </div>
      
      {/* Add hover effect support via global stylesheet if needed */}
      <style>{`
        .glass-panel:hover { border-color: var(--primary) !important; transform: translateY(-5px); }
      `}</style>
    </div>
  );
}

export default MovieCard;