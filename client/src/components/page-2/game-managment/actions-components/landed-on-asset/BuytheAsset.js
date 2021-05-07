import React from "react";
import {AssetCardsContainer} from "../../../../common-components/AssetCardsContainer"

const BuytheAsset = (props) => {
  const confirm = () => {
    props.confirm();
    props.setbuytheAssetState(false);
  };

  return (
    <AssetCardsContainer>
      <div>congradulation you now own the asset</div>
      <button onClick={confirm}>Confirm</button>
    </AssetCardsContainer>
  );
};

export default BuytheAsset;

