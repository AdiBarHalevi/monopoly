import React from "react";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";
import { shouldLayoutChange } from "../../../../../atoms";
import { useSetRecoilState } from "recoil";

const BuytheAsset = (props) => {
  const setrenderState = useSetRecoilState(shouldLayoutChange);

  const confirm = () => {
    props.confirm();
    setrenderState(true);
  };

  return (
    <AssetCardsContainer>
      <div>congradulation you now own the asset</div>
      <button onClick={confirm}>Confirm</button>
    </AssetCardsContainer>
  );
};

export default BuytheAsset;
