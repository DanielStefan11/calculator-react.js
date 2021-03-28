import React from 'react';
// CSS
import './Button.css';

export default function Button({
  children,
  handleClick,
  operandButtons,
  operatorButtons,
  resultButton,
  resetButton,
}) {
  function isOperator(value) {
    return !isNaN(value) || (value === '.' && value === '=');
  }

  return (
    <div
      className={`button
      ${operandButtons && 'operand-button-pressed'}
      ${operatorButtons && 'operators-button-style'}
      ${resultButton && 'equal-button-pressed'}
      ${isOperator(children) ? '' : 'operator'} 
      ${children === 'Backspace' && 'backspace-btn'} ${
        children === '=' && 'equal-btn'
      }
      `}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}
