import React from "react";
import styled, { keyframes } from "styled-components";
import { GamePlayDataState } from "../../../../atoms";
import { useRecoilState } from "recoil";
import { saveToPlayersState } from "../../../../UtilityFunctions";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import { ActionBoxContainer } from "../../../common-components/ActionBoxContainer";

const LandedOnStart = (props) => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const { activeUserState, setActiveUserState, setStartBoxState } = props;

  const confirm = () => {
    const updateActiveUser = { ...activeUserState };
    updateActiveUser["balance"] += 200;
    setActiveUserState(updateActiveUser);
    saveToPlayersState(activeUserState, playersDataState, setPlayersDataState);
    setStartBoxState(false);
  };

  return (
    <>
      <ActionBoxContainer boxState={props.boxState[0]}>
        <AssetCardsContainer>
          <div>{activeUserState.name} has landed on start</div>
          <div>With the balance of : {activeUserState.balance}</div>
          <div>
            {activeUserState.name}'s new balance is:
            {activeUserState.balance + 200}
          </div>
          <button onClick={confirm}>confirm</button>
        </AssetCardsContainer>
      </ActionBoxContainer>
    </>
  );
};

export default LandedOnStart;
