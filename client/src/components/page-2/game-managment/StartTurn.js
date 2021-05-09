import React from "react";
import { AssetCardsContainer } from "../../common-components/AssetCardsContainer";
import { ActionBoxContainer } from "../../common-components/ActionBoxContainer";

// functions that save the users list
import { useRecoilState } from "recoil";
import { activeUserData } from "../../../atoms";
// import {saveToPlayersState} from "../../../../UtilityFunctions"

const StartTurn = (props) => {
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const confirm = () => {
    props.loadLocationCard();
    props.setdiceState([props.diceState[0], props.diceState[1], "roll-dice"]);
    props.setBoxState("none");
  };

  return (
    <ActionBoxContainer boxState={props.boxState}>
      <AssetCardsContainer>
        <div> this is {activeUserDataState&&
        activeUserDataState.name}'s turn </div>
        <button onClick={confirm}>Start turn</button>
      </AssetCardsContainer>
    </ActionBoxContainer>
  );
};

export default StartTurn;
