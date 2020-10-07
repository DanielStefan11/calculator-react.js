import React from "react";
// CSS
import "./Button.css";

export default function Button(props) {
  function isOperator(value) {
    return !isNaN(value) || (value === "." && value === "=");
  }

  return (
    <div
      className={`button ${isOperator(props.children) ? "" : "operator"}`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}