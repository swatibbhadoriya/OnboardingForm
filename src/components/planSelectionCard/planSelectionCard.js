import React from "react"

import "./planSelectionCard.css"
import "boxicons"
function PlanSelectionCard({myself, checked, onCardClick}){
    
    return (
        <div className={`plan-selection-card-main-div ${checked && "checked-plan-selection-card-main-div "}`} onClick={onCardClick}>
            {myself == true?
                <div>
                    <box-icon name='user' type='solid' size="sm"  color={checked?"#654de5":"black"}></box-icon>
                    <h3>For myself</h3>
                    <p>Write better. Think more clearly. Stay organized</p>
                </div>
                :
                <div>
                    <box-icon name='group' type='solid' color={checked?"#654de5":"black"} ></box-icon>    
                    <h3>With my team</h3>
                    <p>Wikis, docs, tasks & projects, all in one place</p>
                </div>
                }
        </div>
        )
}

export default PlanSelectionCard