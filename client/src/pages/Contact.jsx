import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '50px auto', padding: '0 24px', paddingBottom: '100px' }}>
      
      {/* Page Title Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '6px', letterSpacing: '-0.5px' }}>
          Contact <span style={{ color: 'var(--primary)' }}>Us</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Have a question? We'd love to hear from you.</p>
      </div>

      {/* Main Two-Column Split Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '40px', alignItems: 'start' }}>
        
        {/* LEFT COLUMN: Premium Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem', background: 'rgba(225,9,20,0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>📍</span>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px', color: '#fff' }}>Address</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Main Boulevard, Gulberg III, Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem', background: 'rgba(225,9,20,0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>📞</span>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px', color: '#fff' }}>Phone</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+92 300 1234567</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem', background: 'rgba(225,9,20,0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>✉️</span>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px', color: '#fff' }}>Email</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>support@popkorn.pk</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem', background: 'rgba(225,9,20,0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>🕒</span>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px', color: '#fff' }}>Hours</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mon - Sun: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Glass Form Panel */}
        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '40px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.5px' }}>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ahmed Khan" 
                required
                className="input-field"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.5px' }}>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ahmed@email.com" 
                required
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.5px' }}>Subject</label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Booking Issue, refund, general query..." 
              required
              className="input-field"
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.5px' }}>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your issue or question..." 
              rows="5"
              required
              className="input-field"
              style={{ resize: 'vertical', fontFamily: 'inherit' }}
            />
          </div>

          {/* Premium Red Action Button */}
          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>

      </div>

      {/* Inline styles for inputs and button interactions */}
      <style>{`
        .input-field {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          color: #fff;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          outline: none;
        }
        .input-field:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 10px var(--primary-glow);
        }
        .submit-btn {
          width: 100%;
          padding: 16px;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px var(--primary-glow);
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 6px 20px rgba(229, 9, 20, 0.6);
        }
        .submit-btn:active {
          transform: translateY(0);
        }
      `}</style>

    </div>
  );
}

export default Contact;