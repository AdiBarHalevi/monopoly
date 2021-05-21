import React from "react";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import { SendUserToLocation } from "../../../../UtilityFunctions";
import { activeUserData } from "../../../../atoms";
import { useRecoilState } from "recoil";

const GoToJail = (props) => {
  // SendUserToLocation =(activeUserState,setActiveUserState,detinationCardNum)
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const confirm = () => {
    SendUserToLocation(activeUserDataState, setActiveUserDataState, 10);
    props.confirm();
  };

  return (
    <AssetCardsContainer>
      Landed On Go To Jail and now will be placed in Jail for 3 turn
      <button onClick={confirm}>OK</button>
    </AssetCardsContainer>
  );
};

export default GoToJail;
