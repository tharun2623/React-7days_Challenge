// Button.jsx
import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;