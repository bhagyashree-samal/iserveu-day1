import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        Status: <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>System Online</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {/* Assignment 4 Logic Included Here */}
        <div style={{ fontWeight: 600 }}>
          Year: <span style={{ color: 'white' }}>{new Date().getFullYear()}</span>
        </div>
        <div>© iServeu Digital Experience</div>
      </div>
    </footer>
  );
};

export default Footer;
