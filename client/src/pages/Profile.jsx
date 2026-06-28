import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'Guest';
    const email = localStorage.getItem('userEmail') || 'guest@popkorn.com';
    setUserName(name);
    setUserEmail(email);
  }, []);

  return (
    <div style={{ maxWidth: '980px', margin: '40px auto', padding: '0 24px 80px' }}>
      <div className="glass-panel" style={{ borderRadius: '20px', padding: '32px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>My Profile</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Manage your account details and preferences.</p>
        <div style={{ display: 'grid', gap: '16px', maxWidth: '420px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', color: 'var(--text-muted)' }}>Full name</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.04)', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', color: 'var(--text-muted)' }}>Email</label>
            <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.04)', color: '#fff' }} />
          </div>
          <button onClick={() => { localStorage.setItem('userName', userName); localStorage.setItem('userEmail', userEmail); alert('Profile updated'); }} style={{ padding: '12px', borderRadius: '10px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '700' }}>Save Changes</button>
          <button onClick={() => navigate('/bookings')} style={{ padding: '12px', borderRadius: '10px', background: 'transparent', border: '1px solid var(--glass-border)', color: '#fff', cursor: 'pointer' }}>View Bookings</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
