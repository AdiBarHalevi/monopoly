import React from "react";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";

const LandedOnChance = (props) => {
  return (
    <AssetCardsContainer>
      Landed on Chance
      <button onClick={props.confirm}>OK</button>
    </AssetCardsContainer>
  );
};

export default LandedOnChance;

