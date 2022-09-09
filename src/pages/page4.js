import React from "react"

import { useState } from "react";
import FormButton from "../components/formButton/formButton";
import FormInput from "../components/formInput/formInput";
import FormPageHeading from "../components/formPageHeading/formPageHeading";
import PlanSelectionCard from "../components/planSelectionCard/planSelectionCard";
import TickImage from "../assests/img/tick.png"
function Page4({onButtonClick}) {
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
    
   <div className="form-input-div">
    <img src={TickImage} className="tickImage"/>
    <div style={{marginTop:"100px"}}></div>
        <FormPageHeading heading="Congratulations, Eren!" innerHeading="You have completed onboarding, you can start using the Eden!"/>
      <FormButton label="Launch Eden" onButtonClick={onButtonClick}/>
    
      
   </div>
  );
}

export default Page4;
