import React from 'react';

const Button = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={`btn-${variant}`} 
      onClick={onClick}
    >
      {text || 'Click Me'}
    </button>
  );
};

export default Button;
