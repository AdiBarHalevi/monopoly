import React from "react";
import { activeUserData, GamePlayDataState } from "../../../../atoms";
import { useRecoilState } from "recoil";
import { saveToPlayersState } from "../../../../UtilityFunctions";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import { ActionBoxContainer } from "../../../common-components/ActionBoxContainer";

const LandedOnStart = (props) => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const { setStartBoxState } = props;
  const confirm = () => {
    const updateActiveUser = { ...activeUserDataState };
    updateActiveUser["balance"] += 200;
    setActiveUserDataState(updateActiveUser);
    saveToPlayersState(updateActiveUser, playersDataState, setPlayersDataState);
    setStartBoxState(false);
    props.confirm();
  };

  return (
    <>
      <ActionBoxContainer boxState={props.boxState}>
        <AssetCardsContainer>
          <div>{activeUserDataState.name} has landed on start</div>
          <div>With the balance of : {activeUserDataState.balance}</div>
          <div>
            {activeUserDataState.name}'s new balance is:
            {activeUserDataState.balance + 200}
          </div>
          <button onClick={confirm}>confirm</button>
        </AssetCardsContainer>
      </ActionBoxContainer>
    </>
  );
};

export default LandedOnStart;
