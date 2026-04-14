import React, { useState } from 'react';
import './assets/App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';

function App() {
  const [currentView, setView] = useState('dashboard');
  const [user, setUser] = useState({
    name: "Alex",
    role: "admin",
    status: "active"
  });

  const toggleStatus = () => {
    setUser(prev => ({
      ...prev,
      status: prev.status === 'active' ? 'suspended' : 'active'
    }));
  };

  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      role: prev.role === 'admin' ? 'user' : 'admin'
    }));
  };

  return (
    <div className="app-container">
      <Navbar userName={user.name} />
      
      <div className="main-layout">
        <Sidebar currentView={currentView} setView={setView} />
        <MainContent currentView={currentView} user={user} />
      </div>

      <Footer />

      
      <div style={{ position: 'fixed', bottom: '60px', right: '2rem', display: 'flex', gap: '0.75rem' }}>
        <button 
          onClick={toggleStatus} 
          className="btn-primary" 
          style={{ background: user.status === 'suspended' ? 'var(--accent-secondary)' : 'var(--accent-alert)', fontSize: '0.75rem', padding: '0.5rem 1rem' }}
        >
          {user.status === 'suspended' ? 'Activate Account' : 'Suspend Account'}
        </button>
        <button 
          onClick={toggleRole} 
          className="btn-primary" 
          style={{ background: 'transparent', border: '1px solid var(--border)', fontSize: '0.75rem', padding: '0.5rem 1rem' }}
        >
          Switch to {user.role === 'admin' ? 'User' : 'Admin'}
        </button>
      </div>
    </div>
  );
}

export default App;
