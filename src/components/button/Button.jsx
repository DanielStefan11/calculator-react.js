import React from "react";
// CSS
import "./Button.css";

export default function Button({ children, handleClick }) {
  function isOperator(value) {
    return !isNaN(value) || (value === "." && value === "=");
  }

  return (
    <div
      className={`button ${isOperator(children) ? "" : "operator"} ${
        children === "Backspace" && "backspace-btn"
      } ${children === "=" && "equal-btn"}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}
