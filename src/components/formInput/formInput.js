import React from "react";

import "./formInput.css";
function FormInput({ labelValue, placeholderValue, optional, urlExample }) {
  return (
    <div className="form-input-parent-div">
      <div>
        <label>{labelValue}</label>
        {optional && <small>(optional)</small>}
      </div>
      {urlExample != true ? (
        <input type="text" placeholder={placeholderValue} />
      ) : (
        <div className="url">
          <input className="urlexample" value="www.eden.com/" disabled></input>
          <input className="urlinput" type="text" placeholder={placeholderValue} />

        </div>
      )}
    </div>
  );
}

export default FormInput;
