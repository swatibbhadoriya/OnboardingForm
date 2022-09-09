import React from "react"

import FormButton from "../components/formButton/formButton";
import FormInput from "../components/formInput/formInput";
import FormPageHeading from "../components/formPageHeading/formPageHeading";

function Page1({onButtonClick}) {
  return (
    
   <div className="form-input-div">
      <FormPageHeading heading="Welcome! First things first..." innerHeading="You can always change them later."/>
      <div className="">
        <FormInput labelValue="Full Name" placeholderValue="Steve Jobs"/>
        <FormInput labelValue="Display Name" placeholderValue="Steve"/>
        <FormButton label="Create Workspace" onButtonClick={onButtonClick}/>
      </div>
      
   </div>
  );
}

export default Page1;
