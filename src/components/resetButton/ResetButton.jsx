import React from "react";
// CSS
import "./ResetButton.css";

export default function ResetButton(props) {
  return (
    <div className="reset-btn" onClick={() => props.handleReset()}>
      {props.children}
    </div>
  );
}
