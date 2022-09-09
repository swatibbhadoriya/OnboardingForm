import React from "react";
import "./progressBar.css";
import StepProgressBar from "react-step-progress";

import "react-step-progress/dist/index.css";


export default function ProgressBarComponent({ currPage }) {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      <StepProgressBar
       
        startingStep={currPage}
        steps={[
          {
            
            content: step1Content
          },
          {
            
            content: step2Content
          },
          {
            
            content: step3Content,
            validator: step2Validator
          },
          {
            
            content: step3Content
          }
        ]}
      />
    </div>
  );
}
