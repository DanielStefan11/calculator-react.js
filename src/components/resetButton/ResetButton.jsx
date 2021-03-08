import React from "react";
// CSS
import "./ResetButton.css";

export default function ResetButton({ children, handleReset }) {
  return (
    <div className="reset-btn" onClick={() => handleReset()}>
      {children}
    </div>
  );
}
