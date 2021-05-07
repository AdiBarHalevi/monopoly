import React from "react";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import { takeMoneyFromActiveUser } from "../../../../UtilityFunctions";

const LandedOnTax = (props) => {
  const { inTurnLocationState, setActiveUserState, activeUserState } = props;
  const confirm = () => {
    takeMoneyFromActiveUser(
      activeUserState,
      setActiveUserState,
      inTurnLocationState
    );
    props.confirm();
  };

  return (
    <AssetCardsContainer>
      <div>Landed On {inTurnLocationState.name}</div>
      <div>you need to pay {inTurnLocationState.price}$</div>
      <button onClick={confirm}>confirm</button>
    </AssetCardsContainer>
  );
};

export default LandedOnTax;
