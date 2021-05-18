import React from "react";

import { ActionBoxContainer } from "../../../common-components/ActionBoxContainer";

// components for the game play
import LandedOnAsset from "./landed-on-asset/LandedOnAsset";
import LandedOnChance from "./LandedOnChance";
import LandedOnCommunityChest from "./LandedOnCommunityChest";
import LandedOnTax from "./LandedOnTax";
import GoToJail from "./GotoJail";
import VisitJailOrParking from "./VisitJailOrParking";
import LandedOnStart from "./LandedOnStart";

const ActionBox = (props) => {
  const {
    inTurnLocationState,
    setinTurnLocationState,
    boxState,
    setBoxState,
  } = props;

  const confirm = () => {
    setBoxState("none");
  };


  
  if(inTurnLocationState)
    switch (inTurnLocationState.typeOfCard) {
      case "asset":
        return (
          <ActionBoxContainer boxState={boxState}>
            <LandedOnAsset
              confirm={confirm}
              inTurnLocationState={inTurnLocationState}
              setinTurnLocationState={setinTurnLocationState}
            />
          </ActionBoxContainer>
        );
      case "chance":
        return (
          <ActionBoxContainer boxState={boxState}>
            <LandedOnChance confirm={confirm} />
          </ActionBoxContainer>
        );
  
      case "communityChest":
        console.log(props.inTurnLocationState);
  
        return (
          <ActionBoxContainer boxState={boxState}>
            <LandedOnCommunityChest confirm={confirm} />
          </ActionBoxContainer>
        );
  
      case "incomeTax" || "luxuryTax":
        return (
          <ActionBoxContainer boxState={boxState}>
            <LandedOnTax
              confirm={confirm}
              inTurnLocationState={inTurnLocationState}
            />
          </ActionBoxContainer>
        );
  
      case "goTojail":
        return (
          <ActionBoxContainer boxState={boxState[0]}>
            <GoToJail confirm={confirm} />
          </ActionBoxContainer>
        );
  
      case "jail"||"parking":
        return (
          <ActionBoxContainer boxState={boxState}>
            <VisitJailOrParking
              confirm={confirm}
              inTurnLocationState={inTurnLocationState}
              setBoxState = {setBoxState}
            />
          </ActionBoxContainer>
        );

      case "start":
        return (
          <ActionBoxContainer boxState={boxState}>
            <LandedOnStart
              confirm={confirm}
              setStartBoxState={props.setStartBoxState}
              inTurnLocationState={inTurnLocationState}
            />
          </ActionBoxContainer>
        );
  
      default:
        return <></>;
    }
    else return <></>
  
};

export default ActionBox;
