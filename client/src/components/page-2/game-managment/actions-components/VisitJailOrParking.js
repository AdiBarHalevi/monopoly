import React from "react";
import { useRecoilValue } from "recoil";
import { activeUserData } from "../../../../atoms";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";

const VisitJailOrParking = (props) => {
  const { inTurnLocationState } = props;
  const activeUserDataState = useRecoilValue(activeUserData);
  return (
    <AssetCardsContainer>
      {activeUserDataState.name} is visiting at {inTurnLocationState.name}
      <button
        onClick={() => {
          props.setBoxState("none");
        }}
      >
        confirm
      </button>
    </AssetCardsContainer>
  );
};

export default VisitJailOrParking;
