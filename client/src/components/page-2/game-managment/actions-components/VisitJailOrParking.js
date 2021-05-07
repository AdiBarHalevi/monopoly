import React from "react";
import {AssetCardsContainer} from "../../../common-components/AssetCardsContainer"


const VisitJailOrParking = (props) => {
  const {activeUserState,inTurnLocationState,confirm}=props
    return (
      <AssetCardsContainer>
        {activeUserState.name} is visiting  at {inTurnLocationState.name}
        <button onClick={confirm}>confirm</button>
      </AssetCardsContainer>
    );
};

export default VisitJailOrParking;


