import React from "react";
import {AssetCardsContainer} from "../../../common-components/AssetCardsContainer"


const LandedOnCommunityChest = (props) => {
  return (
    <AssetCardsContainer>
      Landed On Community Chest
      <button onClick={props.confirm}>OK</button>
    </AssetCardsContainer>
  );
};

export default LandedOnCommunityChest;
