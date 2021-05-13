import React, { useState } from "react";
import { ActionBoxContainer } from "../../common-components/ActionBoxContainer";
import { AssetCardsContainer } from "../../common-components/AssetCardsContainer";
import SellAssets from "./actions-components/landed-on-asset/SellAssets";
import InvestOrMortgage from "./InvestOrMortgage";

const MakeAmoveMenu = (props) => {
  const [InvestOrMortgageState, setInvestOrMortgageState] = useState(false);

  if (InvestOrMortgageState)
    return (
      <ActionBoxContainer boxState="flex">
        <AssetCardsContainer>
          <InvestOrMortgage />
          <button onClick={() => setInvestOrMortgageState(false)}>
            {" "}
            go back
          </button>
        </AssetCardsContainer>
      </ActionBoxContainer>
    );
  else
    return (
      <ActionBoxContainer boxState="flex">
        <AssetCardsContainer>
          wellcome to make a move mother fucker
          <button onClick={() => setInvestOrMortgageState(true)}>
            {" "}
            Invest Or mortgage your asset
          </button>
          <button onClick={() => props.setMakeAmoveState(false)}>
            {" "}
            go back
          </button>
        </AssetCardsContainer>
      </ActionBoxContainer>
    );
};

export default MakeAmoveMenu;
