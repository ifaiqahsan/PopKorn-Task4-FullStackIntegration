import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="glass-panel" style={{ marginTop: 'auto', padding: '40px 20px', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        
        <div className="footer-brand">
          <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff' }}>🍿 PopKorn</span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>Your go-to platform for booking movie tickets fast, easy, and hassle-free.</p>
        </div>

        <div>
          <h4 style={{ color: '#fff', marginBottom: '15px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Home', 'Movies', 'Bookings', 'Contact'].map(item => (
              <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{item}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#fff', marginBottom: '15px' }}>Contact</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '5px 0' }}>📍 Main Boulevard, Lahore</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '5px 0' }}>📞 +92 300 1234567</p>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
        © {new Date().getFullYear()} PopKorn. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;