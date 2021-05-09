import React, { useState } from "react";
import BuytheAsset from "./BuytheAsset";
import PayTheRent from "./PayRent";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";
import { changeAssetOwnerShipAPI } from "../../../../../axioscall";
import { activeUserData } from "../../../../../atoms";
import Auction from "./Auction"

const LandedOnAsset = (props) => {
  const { inTurnLocationState, activeUserState, confirm} = props;

  const [buyTheAssetState, setbuytheAssetState] = useState(false);

  const buyAsset = () => {
    changeAssetOwnerShipAPI(
      inTurnLocationState.fieldNum,
      activeUserState.playersTurnNumber
    );
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
  
  
  if (buyTheAssetState) {
    return (
      <>
        <BuytheAsset
          activeUserState={activeUserState}
          confirm={confirm}
          setbuytheAssetState={setbuytheAssetState}
          />
      </>
    );
  } else if (!buyTheAssetState) {
    // if the Asset is for sale
    if (inTurnLocationState.forSale) {
      if(activeUserState.balance>inTurnLocationState.price){
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
      }else return (
      <>
        <AssetCardsContainer>
          <Auction>
          </Auction>
        </AssetCardsContainer>
      </>)
    }

    // if the owner of the asset is not the Active user and the property is not for sale
    else if (
      inTurnLocationState.property[0].ownedby !=
      activeUserState.playersTurnNumber
    ) {
      return (
        <>
          <PayTheRent
            activeUserState={activeUserState}
            inTurnLocationState={inTurnLocationState}
            setActiveUserState={props.setActiveUserState}
            confirm={confirm}
          />
        </>
      );

      // if the Active user is also the owner of the Asset
    } else
      return (
        <AssetCardsContainer>
          <h4>
            {activeUserState.name} moved to {inTurnLocationState.name}{" "}
          </h4>
          <div>this player owns the asset</div>
          <div>
            <button onClick={confirm}> ok</button>
          </div>
        </AssetCardsContainer>
      );
  }
};

export default LandedOnAsset;
