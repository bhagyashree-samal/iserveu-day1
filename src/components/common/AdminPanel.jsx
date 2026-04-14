import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeAction, setActiveAction] = useState(null);

  const mockUsers = ["Sam Alex", "Jordan Smith", "Alex Rivera"];
  const mockLogs = [
    "15:30:00 - Master Dashboard Link Established",
    "15:32:10 - Core Module Consolidation Complete",
    "15:40:05 - Unified Theme Injection Stable"
  ];

  return (
    <div className="admin-panel">
      <div className="card" style={{ border: '1px solid var(--accent)' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: 'var(--accent)' }}>
          Command Module
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Root access granted. Multi-assignment system consolidation is active.
        </p>
        
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button 
            className="btn-primary" 
            onClick={() => setActiveAction('users')}
            style={{ opacity: activeAction === 'users' ? 1 : 0.8 }}
          >
            Manage Users
          </button>
          <button 
            className="btn-primary" 
            onClick={() => setActiveAction('logs')}
            style={{ 
              background: 'transparent', 
              border: '1px solid var(--border)', 
              opacity: activeAction === 'logs' ? 1 : 0.6 
            }}
          >
            System Logs
          </button>
        </div>

        {activeAction && (
          <div className="card" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem' }}>
            <h4 style={{ margin: '0 0 0.75rem 0', textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent)' }}>
              {activeAction === 'users' ? 'Database: Active Users' : 'Terminal: Live Logs'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {(activeAction === 'users' ? mockUsers : mockLogs).map((item, idx) => (
                <li key={idx} style={{ padding: '0.4rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                  {activeAction === 'logs' && <span style={{ color: 'var(--accent-secondary)', marginRight: '0.5rem' }}>[OK]</span>}
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setActiveAction(null)}
              style={{ background: 'transparent', border: 'none', color: 'var(--accent)', cursor: 'pointer', padding: 0, marginTop: '1rem', fontSize: '0.75rem' }}
            >
              Close View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
