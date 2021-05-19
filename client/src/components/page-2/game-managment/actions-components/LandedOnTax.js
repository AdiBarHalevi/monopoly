import React from "react";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import { takeMoneyFromActiveUser } from "../../../../UtilityFunctions";
import { useRecoilState } from "recoil";
import { activeUserData } from "../../../../atoms";

const LandedOnTax = (props) => {
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const { inTurnLocationState } = props;
  const confirm = () => {
    takeMoneyFromActiveUser(
      activeUserDataState,
      setActiveUserDataState,
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
