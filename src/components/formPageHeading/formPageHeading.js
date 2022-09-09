import React from "react"

import "./formPageHeading.css"
function FormPageHeading({ heading, innerHeading }) {

   return (
      <div className="form-page-heading-parent-div">
         <h1>{heading}</h1>
         <p>{innerHeading}</p>
      </div>
   );
}

export default FormPageHeading;
