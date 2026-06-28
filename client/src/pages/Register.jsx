import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', formData);
      alert("Registration successful! Please login.");
      navigate('/login');
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container" style={{ 
      maxWidth: '400px', 
      margin: '80px auto', 
      padding: '40px', 
      borderRadius: '16px', 
      background: 'rgba(255,255,255,0.03)', 
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(10px)'
    }}>
      <h2 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>Join PopKorn</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          name="name"
          type="text" placeholder="Full Name" required
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff' }} 
        />
        <input 
          name="email"
          type="email" placeholder="Email" required
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff' }} 
        />
        <input 
          name="password"
          type="password" placeholder="Password" required
          value={formData.password}
          onChange={handleChange}
          style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff' }} 
        />
        <button type="submit" style={{ 
          padding: '12px', 
          background: 'var(--primary)', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: '700'
        }}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;