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
  const { inTurnLocationState, activeUserState } = props;

  const confirm = () => {
    props.setBoxState(["none", false]);
    saveToPlayersState(activeUserState, playersDataState, setPlayersDataState);
  };

  switch (inTurnLocationState.type) {
    case "asset":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          <LandedOnAsset
            activeUserState={props.activeUserState}
            setActiveUserState={props.setActiveUserState}
            confirm={confirm}
            inTurnLocationState={props.inTurnLocationState}
            setinTurnLocationState={props.setinTurnLocationState}
            boxState={props.boxState}
          />
        </ActionBoxContainer>
      );
    case "chance":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          <LandedOnChance buy={confirm} />
        </ActionBoxContainer>
      );

    case "comunityChest":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          <LandedOnCommunityChest buy={confirm} />
        </ActionBoxContainer>
      );

    case "incomeTax" || "luxurytax":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          {console.log(props.inTurnLocationState)}
          <LandedOnTax
            activeUserState={props.activeUserState}
            buy={confirm}
            inTurnLocationState={props.inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    case "goToJail":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          {console.log(props.inTurnLocationState)}
          <GoToJail
            activeUserState={props.activeUserState}
            buy={confirm}
            inTurnLocationState={props.inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    case "Jail" || "parking":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          {console.log(props.inTurnLocationState)}
          <VisitJailOrParking
            activeUserState={props.activeUserState}
            buy={confirm}
            inTurnLocationState={props.inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    case "start":
      return (
        <ActionBoxContainer boxState={props.boxState[0]}>
          {console.log(props.inTurnLocationState)}
          <LandedOnStart
            activeUserState={props.activeUserState}
            buy={confirm}
            inTurnLocationState={props.inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    default:
      return <></>;
  }
};

export default ActionBox;

