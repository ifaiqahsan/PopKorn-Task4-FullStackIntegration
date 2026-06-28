import React from 'react';

function Admin() {
  return (
    <div style={{ maxWidth: '1080px', margin: '40px auto', padding: '0 24px 80px' }}>
      <div className="glass-panel" style={{ borderRadius: '20px', padding: '32px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Admin Dashboard</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Monitor movies, bookings, and customer activity.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[
            ['Movies', '24'],
            ['Bookings', '118'],
            ['Customers', '56'],
            ['Revenue', 'PKR 1.2M']
          ].map(([label, value]) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '16px', padding: '20px' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>{label}</p>
              <h3 style={{ fontSize: '1.4rem' }}>{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
