import React from 'react';
import UserGateway from '../common/UserGateway';

const MainContent = ({ currentView, user }) => {
  // If status is suspended, show warning globally (instead of regular UI)
  if (user.status === 'suspended') {
    return (
      <main className="content-area" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '480px' }}>
          <UserGateway user={user} />
        </div>
      </main>
    );
  }

  if (currentView === 'gateway') {
    return (
      <main className="content-area">
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, margin: 0 }}>Security Gateway</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Identity verification and administrative access control.</p>
        </header>
        <div style={{ maxWidth: '480px' }}>
          <UserGateway user={user} />
        </div>
      </main>
    );
  }

  // Default Dashboard View (Assignment 1 logic)
  return (
    <main className="content-area">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, margin: 0 }}>System Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Overview of your consolidated iServeu operations.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="card">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Revenue</div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0' }}>$42,890.00</div>
          <div className="badge">+12.5%</div>
        </div>
        
        <div className="card">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Users</div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0' }}>2,451</div>
          <div className="badge">+3.2%</div>
        </div>

        <div className="card">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>System Load</div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0' }}>24%</div>
          <div className="badge">Optimal</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
