import React from 'react';
// CSS
import './ResetButton.css';

export default function ResetButton({ children, handleReset, resetButton }) {
  return (
    <div
      className={`reset-btn  ${resetButton && 'reset-btn-pressed'}`}
      onClick={() => handleReset()}
    >
      {children}
    </div>
  );
}
