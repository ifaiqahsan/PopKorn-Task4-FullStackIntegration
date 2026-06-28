import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('userId');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="glass-panel" style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      padding: '1rem 2rem',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.5rem', fontWeight: 900 }}>
          🍿 Pop<span style={{ color: 'var(--primary)' }}>Korn</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <NavLink to="/movies" style={({isActive}) => ({ 
            color: isActive ? 'var(--primary)' : '#fff', 
            textDecoration: 'none', 
            fontWeight: '600' 
          })}>Movies</NavLink>
          
          {isLoggedIn ? (
            <>
              <NavLink to="/bookings" style={({isActive}) => ({ 
                color: isActive ? 'var(--primary)' : '#fff', 
                textDecoration: 'none', 
                fontWeight: '600' 
              })}>My Bookings</NavLink>
              
              <button onClick={handleLogout} className="btn-primary" style={{ 
                padding: '6px 16px', 
                fontSize: '0.9rem' 
              }}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" style={({isActive}) => ({ 
              color: isActive ? 'var(--primary)' : '#fff', 
              textDecoration: 'none', 
              fontWeight: '600' 
            })}>Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;