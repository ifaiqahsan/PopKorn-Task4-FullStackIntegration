import React, { useEffect, useState } from 'react';
import api from '../services/api';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const userId = localStorage.getItem('userId');

  const fetchBookings = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    try {
      const response = await api.get('/bookings', { params: { userId } });
      setBookings(response.data);
    } catch (err) {
      setError('Unable to load your bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [userId]);

  const handleCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        await api.patch(`/bookings/${id}/cancel`);
        // Update local state to reflect cancellation immediately
        setBookings(prev => prev.map(b => b._id === id ? { ...b, status: 'cancelled' } : b));
      } catch (err) {
        alert("Failed to cancel booking. Please try again.");
      }
    }
  };

  if (!userId) {
    return <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>Please login to view your bookings.</div>;
  }

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 24px' }}>
      <div style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '6px' }}>
          My <span style={{ color: '#e50914' }}>Bookings</span>
        </h1>
        <p style={{ color: '#9ca3af' }}>{bookings.length} verified electronic passes loaded</p>
      </div>

      {loading ? (
        <p style={{ color: '#fff' }}>Loading tickets...</p>
      ) : bookings.length === 0 ? (
        <p style={{ color: '#9ca3af' }}>No bookings found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {bookings.map(booking => (
            <div key={booking._id} className="glass-panel ticket-card" style={{
              display: 'flex', borderRadius: '16px', overflow: 'hidden', height: '210px',
              background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative'
            }}>
              {/* Poster */}
              <div style={{ width: '140px', flexShrink: 0, background: '#121218' }}>
                <img src={booking.moviePoster} alt={booking.movieTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Details */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>{booking.movieTitle}</h2>
                    <span style={{ 
                      padding: '4px 12px', borderRadius: '30px', fontSize: '0.7rem', fontWeight: '700',
                      background: booking.status === 'confirmed' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: booking.status === 'confirmed' ? '#4ade80' : '#ef4444'
                    }}>
                      ● {booking.status.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    <div>
                      <small style={{ color: '#6b7280', display: 'block', textTransform: 'uppercase', fontSize: '0.6rem' }}>Time</small>
                      <strong>{booking.showtime?.time}</strong>
                    </div>
                    <div>
                      <small style={{ color: '#6b7280', display: 'block', textTransform: 'uppercase', fontSize: '0.6rem' }}>Screen</small>
                      <strong>{booking.showtime?.screen}</strong>
                    </div>
                    <div>
                      <small style={{ color: '#6b7280', display: 'block', textTransform: 'uppercase', fontSize: '0.6rem' }}>Seats</small>
                      <strong style={{ color: '#e50914' }}>{booking.seats?.join(', ')}</strong>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Ref: <span style={{ color: '#fff', fontFamily: 'monospace' }}>{booking.reference}</span></span>
                  {booking.status === 'confirmed' && (
                    <button onClick={() => handleCancel(booking._id)} style={{
                      background: 'transparent', border: '1px solid #e50914', color: '#e50914',
                      padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.7rem'
                    }}>Cancel</button>
                  )}
                </div>
              </div>

              {/* Perforation Strip */}
              <div style={{ width: '2px', borderLeft: '1px dashed rgba(255,255,255,0.12)', margin: '12px 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-23px', left: '-11px', width: '20px', height: '20px', background: '#060608', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-23px', left: '-11px', width: '20px', height: '20px', background: '#060608', borderRadius: '50%' }} />
              </div>

              {/* Barcode */}
              <div style={{ width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>
                <div style={{ width: '60px', height: '60px', background: '#fff', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>
      )}
      <style>{`.ticket-card:hover { transform: translateY(-4px); border-color: rgba(229, 9, 20, 0.3); }`}</style>
    </div>
  );
}

export default MyBookings;