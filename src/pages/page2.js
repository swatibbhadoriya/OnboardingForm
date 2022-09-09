import React from "react"

import FormButton from "../components/formButton/formButton";
import FormInput from "../components/formInput/formInput";
import FormPageHeading from "../components/formPageHeading/formPageHeading";

function Page2({onButtonClick}) {
   
  return (
    
   <div className="form-input-div">
      <FormPageHeading heading="Let's set up a home for all your work" innerHeading="You can always create another workspace later."/>
      <div className="">
        <FormInput labelValue="Workspace Name " placeholderValue="Eden"/>
        <FormInput labelValue="Workspace URL" optional={true} urlExample={true} placeholderValue="Example"/>
        <FormButton label="Create Workspace" onButtonClick={onButtonClick}/>
      </div>
      
   </div>
  );
}

export default Page2;
