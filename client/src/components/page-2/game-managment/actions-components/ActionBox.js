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

// functions that save the users list
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../../../atoms";
import { saveToPlayersState } from "../../../../UtilityFunctions";

const ActionBox = (props) => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const {
    inTurnLocationState,
    setinTurnLocationState,
    activeUserState,
    setActiveUserState,
    boxState,
    setBoxState
  } = props;

  const confirm = () => {
    setBoxState("none");
    saveToPlayersState(activeUserState, playersDataState, setPlayersDataState);
  };

  switch (inTurnLocationState.typeOfCard) {
    case "asset":
      return (
        <ActionBoxContainer boxState={boxState}>
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
        <ActionBoxContainer boxState={boxState}>
          <LandedOnChance
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState}
          />
        </ActionBoxContainer>
      );

    case "communityChest":
      {
        console.log(props.inTurnLocationState);
      }
      return (
        <ActionBoxContainer boxState={boxState}>
          <LandedOnCommunityChest
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState}
          />
        </ActionBoxContainer>
      );

    case "incomeTax" || "luxuryTax":
      return (
        <ActionBoxContainer boxState={boxState}>
          <LandedOnTax
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
          />
        </ActionBoxContainer>
      );

    case "goTojail":
      return (
        // {activeUserState,setActiveUserState}
        <ActionBoxContainer boxState={boxState}>
          <GoToJail
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
          />
        </ActionBoxContainer>
      );

    case "jail":
      return (
        <ActionBoxContainer boxState={boxState}>
          <VisitJailOrParking
            activeUserState={activeUserState}
            setActiveUserState={setActiveUserState}
            confirm={confirm}
            inTurnLocationState={inTurnLocationState}
          />
        </ActionBoxContainer>
      );
    case "parking":
      return (
        <ActionBoxContainer boxState={boxState}>
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
        <ActionBoxContainer boxState={boxState}>
          <LandedOnStart
            activeUserState={activeUserState}
            buy={confirm}
            inTurnLocationState={inTurnLocationState}
          />
        </ActionBoxContainer>
      );

    default:
      return <>{console.log(inTurnLocationState.type)}</>;
  }
};

export default ActionBox;
