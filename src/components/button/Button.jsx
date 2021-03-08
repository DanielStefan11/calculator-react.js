import React from "react";
// CSS
import "./Button.css";

export default function Button({
  children,
  handleClick,
  pressed1,
  pressed2,
  pressed3,
  pressed4,
  pressed5,
  pressed6,
  pressed7,
  pressed8,
  pressed9,
  pressed0,
}) {
  function isOperator(value) {
    return !isNaN(value) || (value === "." && value === "=");
  }

  return (
    <div
      className={`button
      ${pressed1 && "operand-button-pressed"}
      ${pressed2 && "operand-button-pressed"}
      ${pressed3 && "operand-button-pressed"}
      ${pressed4 && "operand-button-pressed"}
      ${pressed5 && "operand-button-pressed"}
      ${pressed6 && "operand-button-pressed"}
      ${pressed7 && "operand-button-pressed"}
      ${pressed8 && "operand-button-pressed"}
      ${pressed9 && "operand-button-pressed"}
      ${pressed0 && "operand-button-pressed"}
      ${isOperator(children) ? "" : "operator"} 
      ${children === "Backspace" && "backspace-btn"} ${
        children === "=" && "equal-btn"
      }
      `}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}
