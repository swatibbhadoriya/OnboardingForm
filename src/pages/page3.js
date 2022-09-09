import React from "react"

import { useState } from "react";
import FormButton from "../components/formButton/formButton";
import FormInput from "../components/formInput/formInput";
import FormPageHeading from "../components/formPageHeading/formPageHeading";
import PlanSelectionCard from "../components/planSelectionCard/planSelectionCard";

function Page3({onButtonClick}) {
    let [myself,setMyself] = useState(false)
    let [withMyTeamSelected,setWithMyTeamSelected] = useState(false)


    function onCardClick(name){
        if(name == "myself"){
            setMyself(prev => !prev)
            setWithMyTeamSelected(false)
        }else {
            setWithMyTeamSelected(prev => !prev)
            setMyself(false)
        }
    }

  return (
    
   <div className="form-input-div ">
      <FormPageHeading heading="How are you planning to use Eden?" innerHeading="We'll streamline your setup experience accordingly"/>
      <div className="page3-card-parent" >
        <PlanSelectionCard myself={true} checked={myself} onCardClick={()=> onCardClick("myself")}/>
        <PlanSelectionCard myself={false} checked={withMyTeamSelected} onCardClick={onCardClick}/>
      </div>
      <FormButton label="Create Workspace" onButtonClick={onButtonClick}/>
   </div>
  );
}

export default Page3;
