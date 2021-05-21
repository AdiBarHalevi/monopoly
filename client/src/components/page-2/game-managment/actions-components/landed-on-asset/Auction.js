import React, { useState, useRef } from "react";
import { GamePlayDataState, shouldLayoutChange } from "../../../../../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  changeAssetOwnerShipAPI,
  takeMoneyfromUser,
} from "../../../../../axioscall";
import SellAssets from "./SellAssets";
import styled from "styled-components";
import AuctionMallet from "../../../../../img/Auction-mallet.gif";

const Auction = (props) => {
  const [isAssetSold, setIsAssetSold] = useState(false);
  const [bidPrice, setbidPrice] = useState(0);
  const [bidPhase, setbidPhase] = useState("Auction-start");
  const [invalidBid, setinvalidBid] = useState("");
  // the number of the bidding player
  const [currentBidderNumber, setCurrentBidderNumber] = useState(0);
  // global var to import players list
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  // inner state for the Auction
  const [auctionPlayersState, setAuctionActivePlayersState] = useState([
    ...playersDataState,
  ]);

  const setrenderState = useSetRecoilState(shouldLayoutChange);

  const bidRef = useRef(0);

  const endAuction = async () => {
    await changeAssetOwnerShipAPI(
      props.inTurnLocationState.fieldNum,
      auctionPlayersState[0].playersTurnNumber
    );

    await takeMoneyfromUser(auctionPlayersState[0]._id, bidPrice);

    const newPlayersStateAfterPurchase = playersDataState.map((player) => {
      if (
        player.playersTurnNumber === auctionPlayersState[0].playersTurnNumber
      ) {
        const newplayer = { ...player, balance: player.balance - bidPrice };
        return newplayer;
      }
      return player;
    });

    setPlayersDataState(newPlayersStateAfterPurchase);

    props.confirm();
    setrenderState(true);
  };

  const changebidingPlayer = () => {
    let currentPlayerIndex = currentBidderNumber;
    // saves the index of the player on the remaining of the auction table
    if (currentPlayerIndex === auctionPlayersState.length - 1) {
      currentPlayerIndex = 0;
    } else currentPlayerIndex++;
    setCurrentBidderNumber(currentPlayerIndex);
  };

  const changebidingPlayerAfterRetirement = () => {
    // delete current user
    let currentPlayerIndex = currentBidderNumber;
    const newAuctionPlayerList = [...auctionPlayersState];
    newAuctionPlayerList.splice(currentPlayerIndex, 1);
    // set the new Active players list
    setAuctionActivePlayersState(newAuctionPlayerList);
    // update to new Active user
    if (currentPlayerIndex === newAuctionPlayerList.length - 1) {
      currentPlayerIndex = 0;
    } else currentPlayerIndex++;
    setCurrentBidderNumber(currentPlayerIndex);

    return newAuctionPlayerList;
  };

  const retireFromAuction = () => {
    changebidingPlayerAfterRetirement();
    if (auctionPlayersState.length === 2) {
      return setbidPhase("Auction-end");
    }
    setbidPhase("bid");
  };

  const validateBid = (userbid) => {
    if (userbid > auctionPlayersState[currentBidderNumber][`balance`]) {
      setinvalidBid("your bid is over you balance,sell assets or bid lower");
      return false;
    } else if (userbid <= bidPrice) {
      setinvalidBid("your bid is too low,bid higer or forfit the Auction");
      return false;
    }
    return true;
  };

  const endBidTurn = () => {
    setbidPhase("bid");
    changebidingPlayer();
  };

  const activeUserbid = () => {
    if (validateBid(bidRef.current.value)) {
      setbidPrice(parseInt(bidRef.current.value));
      setinvalidBid("");
      return setbidPhase("endbid");
    }
  };

  if (!isAssetSold)
    if (bidPhase === "Auction-start")
      return (
        <Container>
          <GIF gif={AuctionMallet}></GIF>
          <h3>An auction is about to start!</h3>
          <p>
            the asset for sale is :<br />
            {props.inTurnLocationState.name}
          </p>
          <CardShow>
            <CardHeader color={props.inTurnLocationState.headerColor} />
            <div>{props.inTurnLocationState.name}</div>
            <div>{props.inTurnLocationState.price}</div>
          </CardShow>
          <button onClick={endBidTurn}>Start</button>
        </Container>
      );
    else if (bidPhase === "bid")
      return (
        <Container>
          <h3>
            Auction Time <br />
            current bid is ${bidPrice}
          </h3>
          current bidding players:
          <TableContainer>
            {auctionPlayersState.map((player, i) => {
              return (
                <tbody>
                  <tr>
                    <th>{player.name}</th>
                    <td>{player.balance}</td>
                  </tr>
                </tbody>
              );
            })}
          </TableContainer>
          {auctionPlayersState && invalidBid.length === 0 && (
            <div>
              {auctionPlayersState[currentBidderNumber][`name`] &&
                auctionPlayersState[currentBidderNumber][`name`]}
              , this is your turn to bid <br />
              your current balance is: $
              {auctionPlayersState[currentBidderNumber][`balance`] &&
                auctionPlayersState[currentBidderNumber][`balance`]}
              <br />
              <label>make your bid:</label>
              <br />
              <input type="number" ref={bidRef}></input>
              <button onClick={activeUserbid}> bid </button>
            </div>
          )}
          {auctionPlayersState && invalidBid.length > 1 && (
            <div>
              <div>{invalidBid}</div>
              <label> make your bid:</label>
              <br />
              <input type="number" ref={bidRef}></input>
              <button onClick={activeUserbid}> bid </button>
            </div>
          )}
          <button onClick={retireFromAuction}>retire from auction</button>
        </Container>
      );
    else if (bidPhase === "endbid")
      return (
        <Container>
          {auctionPlayersState[currentBidderNumber][`name`]} has placed a bid of
          ${bidPrice} <br />
          <button onClick={endBidTurn}>Confirm</button>
        </Container>
      );
    else if (bidPhase === "Auction-end")
      return (
        <Container>
          Auction ended the winner is:
          <div>
            <h2>{auctionPlayersState[0][`name`]}</h2>
            <p>
              wins the auction over the new property
              <br />
              at the cost of: ${bidPrice}
            </p>
          </div>
          <CardShow>
            <CardHeader color={props.inTurnLocationState.headerColor} />
            <div>{props.inTurnLocationState.name}</div>
            <div>{props.inTurnLocationState.price}</div>
          </CardShow>
          <button onClick={endAuction}>Confirm</button>
        </Container>
      );

  return (
    <SellAssets
      confirm={props.confirm}
      setSellAssetState={setIsAssetSold}
      endTurn={props.endTurn}
    />
  );
};

export default Auction;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const TableContainer = styled.table`
  border: 1px solid black;
`;
const GIF = styled.div`
  background-image: url(${(props) => props.gif});
  background-position: center;
  background-size: cover;
  width: 10rem;
  height: 8.2rem;
`;

const CardShow = styled.div`
  width: 8rem;
  border: 1px solid;
  display: flex;
  height: 8rem;
  background: #d7e6d5;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const CardHeader = styled.div`
  width: 100%;
  font-size: 10px;
  height: 2rem;
  background: ${(props) => props.color};
`;
