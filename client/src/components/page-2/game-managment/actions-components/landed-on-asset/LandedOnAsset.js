import React, { useState } from "react";
import BuytheAsset from "./BuytheAsset";
import PayTheRent from "./PayRent";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";
import { changeAssetOwnerShipAPI } from "../../../../../axioscall";
import InsufficientFunds from "./InsufficientFunds";
import Auction from "./Auction";
import {
  activeUserData,
  gameCardsData,
  GamePlayDataState,
} from "../../../../../atoms";
import { useRecoilState } from "recoil";
import { saveToPlayersState } from "../../../../../UtilityFunctions";

const LandedOnAsset = (props) => {
  const { inTurnLocationState, confirm } = props;

  const [gameCardsDataState, setGameCardsDataState] = useRecoilState(
    gameCardsData
  );
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const [buyTheAssetState, setbuytheAssetState] = useState(false);
  const [auctionState, setAuctionState] = useState(false);

  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const buyAsset = () => {
    const fieldNum = inTurnLocationState.fieldNum;
    const tempCards = { ...gameCardsDataState };
    tempCards[fieldNum] = {
      ...tempCards[fieldNum],
      property: [activeUserDataState.name, 0],
      forSale: false,
    };
    setGameCardsDataState(tempCards);

    const update = { ...activeUserDataState };

    update[`balance`] -= inTurnLocationState[`price`];
    update.property = [...update.property, inTurnLocationState];
    saveToPlayersState(update, playersDataState, setPlayersDataState);

    setActiveUserDataState(update);
    setbuytheAssetState(true);
    changeAssetOwnerShipAPI(
      inTurnLocationState.fieldNum,
      activeUserDataState.playersTurnNumber
    );
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
              <InsufficientFunds confirm={confirm}></InsufficientFunds>
            </AssetCardsContainer>
          </>
        );
    }

    // if the owner of the asset is not the Active user and the property is not for sale
    else if (
      parseInt(inTurnLocationState.property[0].ownedby) !==
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
