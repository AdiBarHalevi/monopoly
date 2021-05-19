import React from "react";
import { AssetCardsContainer } from "../../common-components/AssetCardsContainer";
import { ActionBoxContainer } from "../../common-components/ActionBoxContainer";

// functions that save the users list
import { useRecoilValue } from "recoil";
import { activeUserData } from "../../../atoms";
// import {saveToPlayersState} from "../../../../UtilityFunctions"

const StartTurn = (props) => {
  const activeUserDataState = useRecoilValue(activeUserData);

  const confirm = () => {
    props.loadLocationCard();
    props.setdiceState([props.diceState[0], props.diceState[1], "roll-dice"]);
  };

  return (
    <ActionBoxContainer>
      <AssetCardsContainer>
        <div>
          {" "}
          this is {activeUserDataState && activeUserDataState.name}'s turn{" "}
        </div>
        <button onClick={confirm}>Start turn</button>
      </AssetCardsContainer>
    </ActionBoxContainer>
  );
};

export default StartTurn;
