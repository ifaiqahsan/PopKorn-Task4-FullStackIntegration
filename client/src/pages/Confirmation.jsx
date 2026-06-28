import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.booking) {
      navigate('/movies');
    }
  }, [navigate, state]);

  if (!state?.booking) return null;

  const { booking } = state;

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 24px 80px' }}>
      <div className="glass-panel" style={{ borderRadius: '22px', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '6px' }}>Booking Confirmed</h2>
            <p style={{ color: 'var(--text-muted)' }}>Your movie ticket is ready. Enjoy the show!</p>
          </div>
          <span style={{ padding: '8px 14px', borderRadius: '999px', background: 'rgba(34,197,94,0.16)', color: '#4ade80', fontWeight: '700' }}>Paid</span>
        </div>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Movie</span><strong>{booking.movieTitle}</strong></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Showtime</span><strong>{booking.showtime?.date} • {booking.showtime?.time}</strong></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Seats</span><strong>{booking.seats?.join(', ')}</strong></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Reference</span><strong>{booking.reference}</strong></div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/bookings')} style={{ padding: '12px 16px', borderRadius: '10px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer' }}>View My Bookings</button>
          <button onClick={() => navigate('/movies')} style={{ padding: '12px 16px', borderRadius: '10px', background: 'transparent', border: '1px solid var(--glass-border)', color: '#fff', cursor: 'pointer' }}>Browse More Movies</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
