import React from 'react';

const Navbar = ({ userName }) => {
  return (
    <nav className="navbar">
      <div className="logo">iServeu Dashboard</div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Welcome, <span style={{ color: 'white', fontWeight: 600 }}>{userName}</span>
        </div>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          {userName[0]}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
