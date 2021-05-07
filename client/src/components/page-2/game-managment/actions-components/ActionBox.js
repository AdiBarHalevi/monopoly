import React from "react";
import styled, { keyframes } from "styled-components";

// components for the game play
import LandedOnAsset from "./landed-on-asset/LandedOnAsset";
import LandedOnChance from "./LandedOnChance";
import LandedOnCommunityChest from "./LandedOnCommunityChest";
import LandedOnTax from "./LandedOnTax";
import GoToJail from "./GotoJail";
import VisitJailOrParking from "./VisitJailOrParking";
import LandedOnStart from "./LandedOnStart";
import {ActionBoxContainer} from "../../../common-components/ActionBoxContainer"


// functions that save the users list
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../../../atoms";
import { saveToPlayersState } from "../../../../UtilityFunctions";

const ActionBox = (props) => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const { inTurnLocationState,setinTurnLocationState, activeUserState,setActiveUserState,boxState} = props;

  const confirm = () => {
    props.setBoxState(["none", false]);
    saveToPlayersState(activeUserState, playersDataState, setPlayersDataState);
  };

  switch (inTurnLocationState.type) {
    case "asset":
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <LandedOnAsset
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState}
          />
        </ActionBoxContainer>
      );
    case "chance":
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <LandedOnChance
                      activeUserState={activeUserState}
                      setActiveUserState={setActiveUserState}
                      confirm={confirm}
                      inTurnLocationState={inTurnLocationState}
                      setinTurnLocationState={setinTurnLocationState}
                      boxState={boxState}/>
        </ActionBoxContainer>
      );

    case "communityChest":
      {console.log(props.inTurnLocationState)}
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <LandedOnCommunityChest 
           activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState} />
        </ActionBoxContainer>
      );

    case "incomeTax" || "luxurytax":
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <LandedOnTax
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState}
          />
        </ActionBoxContainer>
      );

    case "goTojail":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          <GoToJail
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState}
          />
        </ActionBoxContainer>
      );

    case "jail":
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <VisitJailOrParking
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
          />
        </ActionBoxContainer>
      );
    case  "parking":
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <VisitJailOrParking
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    case "start":
      return (
        <ActionBoxContainer boxState={boxState[0]}>
          <LandedOnStart
            activeUserState={activeUserState}
            buy={confirm}
            inTurnLocationState={inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    default:
      return <>
       {console.log(inTurnLocationState.type)}
       </>;
  }
};

export default ActionBox;

