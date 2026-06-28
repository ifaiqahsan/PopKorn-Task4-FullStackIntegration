import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MoviePoster from '../components/MoviePoster';
import api from '../services/api';

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!state?.booking) {
    navigate('/movies');
    return null;
  }

  const { booking } = state;

  const handlePay = async () => {
    setLoading(true);
    setError('');

    const paidBooking = {
      ...booking,
      paymentMethod,
      paymentStatus: 'paid'
    };

    navigate('/confirmation', { state: { booking: paidBooking } });
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '980px', margin: '40px auto', padding: '0 24px 80px' }}>
      <div className="glass-panel" style={{ borderRadius: '20px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '0' }}>
        <div style={{ padding: '28px', background: 'rgba(255,255,255,0.03)' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Secure Checkout</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Complete your purchase with a demo payment flow.</p>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            {['card', 'wallet', 'cash'].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                style={{ padding: '10px 14px', borderRadius: '999px', border: paymentMethod === method ? '1px solid var(--primary)' : '1px solid var(--glass-border)', background: paymentMethod === method ? 'rgba(229,9,20,0.16)' : 'transparent', color: '#fff' }}
              >
                {method === 'card' ? 'Credit / Debit Card' : method === 'wallet' ? 'Digital Wallet' : 'Cash at Counter'}
              </button>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '16px' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>Payment Summary</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Tickets</span>
              <span>{booking.seats?.length || 0}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Service Fee</span>
              <span>PKR 80</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.05rem' }}>
              <span>Total</span>
              <span>PKR {(booking.totalPrice + 80).toLocaleString()}</span>
            </div>
          </div>
          {error && <p style={{ color: '#f87171', marginTop: '12px' }}>{error}</p>}
        </div>
        <div style={{ padding: '28px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
          <MoviePoster src={booking.moviePoster} alt={booking.movieTitle} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px', marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{booking.movieTitle}</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>{booking.showtime?.date} • {booking.showtime?.time}</p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>Seats: {booking.seats?.join(', ')}</p>
          <button onClick={handlePay} disabled={loading} style={{ width: '100%', padding: '12px', borderRadius: '10px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '700' }}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
