import React from "react";
import {AssetCardsContainer} from "../../../common-components/AssetCardsContainer"
import {SendUserToLocation} from "../../../../UtilityFunctions"


const GoToJail = (props) => {
  // SendUserToLocation =(activeUserState,setActiveUserState,detinationCardNum)
  const {activeUserState,setActiveUserState}=props
  const confirm =()=>{
    SendUserToLocation(activeUserState,setActiveUserState,10)
    props.confirm()
  }

  return (
    <AssetCardsContainer>
      Landed On Go To Jail and now will be placed in Jail for 3 turn
      <button onClick={confirm}>OK</button>
    </AssetCardsContainer>
  );
};

export default GoToJail;


// activeUserState={activeUserState}
// setActiveUserState={setActiveUserState}
// confirm={confirm}
// inTurnLocationState={inTurnLocationState}
// setinTurnLocationState={setinTurnLocationState}
// boxState={boxState}