import React from 'react';

const Sidebar = ({ currentView, setView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'gateway', label: 'Security Gateway', icon: '🔒' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      {menuItems.map((item) => (
        <div 
          key={item.id}
          className={`nav-item ${currentView === item.id ? 'active' : ''}`}
          onClick={() => setView(item.id)}
        >
          <span>{item.icon}</span>
          {item.label}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
