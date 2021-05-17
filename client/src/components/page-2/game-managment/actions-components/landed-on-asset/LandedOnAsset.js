import React, { useState } from "react";
import BuytheAsset from "./BuytheAsset";
import PayTheRent from "./PayRent";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";
import { changeAssetOwnerShipAPI } from "../../../../../axioscall";
import InsufficientFunds from "./InsufficientFunds";
import Auction from "./Auction";
import { activeUserData } from "../../../../../atoms";
import { useRecoilState } from "recoil";

const LandedOnAsset = (props) => {
  const { inTurnLocationState,setinTurnLocationState, confirm } = props;

  const [buyTheAssetState, setbuytheAssetState] = useState(false);
  const [auctionState, setAuctionState] = useState(false);

  const [activeUserDataState, setActiveUserDataState] =
  useRecoilState(activeUserData);

  const buyAsset = () => {
    changeAssetOwnerShipAPI(
      inTurnLocationState.fieldNum,
      activeUserDataState.playersTurnNumber
    );
    const tempActiveUser = { ...activeUserDataState };
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
    setinTurnLocationState(tempLocationState);
    setActiveUserDataState(tempActiveUser);
    setbuytheAssetState(true);
  };

  // if the user wants to buy the asset
  if (buyTheAssetState) {
    return (
      <>
        <BuytheAsset
          confirm={confirm}
          setbuytheAssetState={setbuytheAssetState}
        />
      </>
    );
    // if buy the asset state is set to false (its defualt)
  } else if (!buyTheAssetState) {
    if (auctionState)
      return (
        <AssetCardsContainer>
          <Auction
            setAuctionState={setAuctionState}
            inTurnLocationState={inTurnLocationState}
            confirm={confirm}
          />
        </AssetCardsContainer>
      );
    // if the Asset is for sale
    if (inTurnLocationState.forSale) {
      if (activeUserDataState.balance > inTurnLocationState.price) {
        return (
          <AssetCardsContainer>
            <h4>
              {activeUserDataState.name} moved to {inTurnLocationState.name}{" "}
            </h4>
            <div>
              Would you like to purchase the asset in the price of{" "}
              {inTurnLocationState.price}
            </div>
            <div>Your Current balance is:{activeUserDataState.balance}</div>
            <div>
              <button onClick={buyAsset}> buy</button>
              <button onClick={() => setAuctionState(true)}>
                {" "}
                decline and go to an auction
              </button>
              {/* <button onClick={confirm}> decline</button> */}
            </div>
          </AssetCardsContainer>
        );
      } else
        return (
          <>
            <AssetCardsContainer>
              <InsufficientFunds
                confirm={confirm}
              ></InsufficientFunds>
            </AssetCardsContainer>
          </>
        );
    }

    // if the owner of the asset is not the Active user and the property is not for sale
    else if (
      inTurnLocationState.property[0].ownedby !==
      activeUserDataState.playersTurnNumber
    ) {
      return (
        <>
          <PayTheRent
            inTurnLocationState={inTurnLocationState}
            confirm={confirm}
          />
        </>
      );

      // if the Active user is also the owner of the Asset
    } else
      return (
        <AssetCardsContainer>
          <h4>
            {activeUserDataState.name} moved to {inTurnLocationState.name}{" "}
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
