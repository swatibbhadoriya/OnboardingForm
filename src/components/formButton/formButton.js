import React from "react"
import "./formButton.css"
function FormButton({ label, onButtonClick }) {


  return (
    <button className="form-button" onClick={onButtonClick}>{label}</button>
  );
}

export default FormButton;
