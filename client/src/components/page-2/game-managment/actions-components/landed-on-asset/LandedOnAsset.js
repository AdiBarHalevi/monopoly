import React, { useState } from "react";
import BuytheAsset from "./BuytheAsset";
import PayTheRent from "./PayRent";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";

const LandedOnAsset = (props) => {
  const { inTurnLocationState, activeUserState, confirm } = props;

  const [buyTheAssetState, setbuytheAssetState] = useState(false);

  const buyAsset = () => {
    const tempActiveUser = { ...activeUserState };
    const tempLocationState = { ...inTurnLocationState };
    const activeUserassetsUpdate = [];
    activeUserassetsUpdate.push(tempLocationState, tempActiveUser[`property`]);
    tempActiveUser[`balance`] -= tempLocationState[`price`];
    tempActiveUser[`property`] = activeUserassetsUpdate;
    tempLocationState[`forSale`] = false;
    tempLocationState[`property`] = [
      tempActiveUser.name,
      tempActiveUser.playersTurnNumber,
      tempActiveUser._id,
    ];
    props.setinTurnLocationState(tempLocationState);
    props.setActiveUserState(tempActiveUser);
    setbuytheAssetState(true);
  };

  if (!buyTheAssetState) {
    if (inTurnLocationState.forSale)
      return (
        <AssetCardsContainer>
          <h4>
            {activeUserState.name} moved to {inTurnLocationState.name}{" "}
          </h4>
          <div>
            Would you like to purchase the asset in the price of{" "}
            {inTurnLocationState.price}
          </div>
          <div>Your Current balance is:{activeUserState.balance}</div>
          <div>
            <button onClick={buyAsset}> buy</button>
            <button onClick={confirm}> decline</button>
          </div>
        </AssetCardsContainer>
      );
    else
      return (
        <PayTheRent
          activeUserState={activeUserState}
          inTurnLocationState={inTurnLocationState}
          setActiveUserState={props.setActiveUserState}
          confirm={confirm}
        />
      );
  } else if (buyTheAssetState)
    return (
      <BuytheAsset
        activeUserState={activeUserState}
        confirm={confirm}
        setbuytheAssetState={setbuytheAssetState}
      />
    );
  else return <></>;
};

export default LandedOnAsset;
