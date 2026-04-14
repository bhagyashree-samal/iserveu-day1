import React from 'react';
import AdminPanel from './AdminPanel';

const UserGateway = ({ user }) => {
  if (user.status === 'suspended') {
    return (
      <div className="card warning-card" style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 1rem 0' }}>Access Denied</h2>
        <p>Security Status: <strong>{user.status.toUpperCase()}</strong></p>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Please contact system security to restore your dashboard access.</p>
        <button className="btn-primary" style={{ marginTop: '1.5rem', background: 'var(--accent-alert)' }}>
          Contact Support
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="badge" style={{ marginBottom: '1rem' }}>
        Identity Verified
      </div>
      
      <h2 style={{ margin: '0.5rem 0', fontSize: '1.5rem' }}>{user.name}</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Authorized Role: <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{user.role.toUpperCase()}</span>
      </p>

      {user.role === 'admin' ? (
        <AdminPanel />
      ) : (
        <div className="card" style={{ opacity: 0.6, borderStyle: 'dashed' }}>
          <p style={{ fontSize: '0.875rem' }}>Standard user privileges applied. Unified dashboard modules are restricted.</p>
        </div>
      )}
    </div>
  );
};

export default UserGateway;
