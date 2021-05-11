import React, { useState, useRef } from "react";
import { GamePlayDataState } from "../../../../../atoms";
import { useRecoilState } from "recoil";
import {
  changeAssetOwnerShipAPI,
  takeMoneyfromUser,
} from "../../../../../axioscall";
import SellAssets from "./SellAssets";
import styled from "styled-components";
import AuctionMallet from "../../../../../img/Auction-mallet.gif";

const Auction = (props) => {
  const [sellAssetState, setSellAssetState] = useState(false);
  const [bidState, setbidState] = useState(0);
  const [bidPhase, setbidPhase] = useState("Auction-start");
  const [invalidBid, setinvalidBid] = useState("");
  // the number of the bidding player
  const [activeTurnState, setActiveTurnState] = useState(0);
  // global var to import players list
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  // inner state for the Auction
  const [auctionPlayersState, setAuctionActivePlayersState] = useState({
    ...playersDataState,
  });
  const bidRef = useRef(0);

  const endAuction = async () => {
    console.log(Object.values(auctionPlayersState)[0]);
    console.log(Object.values(auctionPlayersState)[0]._id);
    await changeAssetOwnerShipAPI(
      props.inTurnLocationState.fieldNum,
      Object.entries(auctionPlayersState)[0][1].playersTurnNumber
    );
    await takeMoneyfromUser(
      Object.values(auctionPlayersState)[0]._id,
      bidState
    );
    props.confirm();
  };

  const changebidingPlayer = () => {
    let currentPlayerIndex = 0;
    // saves the index of the player on the remaining of the auction table
    Object.values(auctionPlayersState).find((user, i) => {
      if (user.playersTurnNumber) {
        if (
          user.playersTurnNumber ===
          Object.values(auctionPlayersState)[activeTurnState][
            `playersTurnNumber`
          ]
        )
          return (currentPlayerIndex = i);
      }
      return ""
    });

    console.log(currentPlayerIndex);
    // // update active user
    if (currentPlayerIndex === Object.keys(auctionPlayersState).length - 1)
      setActiveTurnState(0);
    else {
      currentPlayerIndex++;
      setActiveTurnState(currentPlayerIndex);
    }
  };

  const changebidingPlayerAfterRetirement = () => {
    let currentPlayerIndex = 0;
    const newAuctionPlayerList = { ...auctionPlayersState };
    delete newAuctionPlayerList[activeTurnState];
    console.log(newAuctionPlayerList);
    Object.values(auctionPlayersState).find((user, i) => {
      if (
        user.playersTurnNumber ===
        Object.values(auctionPlayersState)[activeTurnState][`playersTurnNumber`]
      ){
        return (currentPlayerIndex = i);
      }else return ""
    });
    // update active user
    if (currentPlayerIndex === playersDataState.length - 1)
      setActiveTurnState(0);
    else setActiveTurnState(currentPlayerIndex++);
    return newAuctionPlayerList;
  };

  const retireFromAuction = () => {
    if (Object.keys(auctionPlayersState).length - 1 === 1) {
      return setbidPhase("Auction-end");
    }
    const newAuctionPlayerList = changebidingPlayerAfterRetirement();
    setAuctionActivePlayersState(newAuctionPlayerList);
    return setbidPhase("bid");
  };

  const validateBid = (userbid) => {
    if (
      userbid > Object.values(auctionPlayersState)[activeTurnState][`balance`]
    ) {
      setinvalidBid("your bid is over you balance,sell assets or bid lower");
      return false;
    } else if (userbid <= bidState) {
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
      setbidState(parseInt(bidRef.current.value));
      setinvalidBid("");
      return setbidPhase("endbid");
    }
  };

  if (!sellAssetState)
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
            current bid is ${bidState}
          </h3>
          current bidding players:
          <TableContainer>
            {Object.keys(auctionPlayersState).map((playerNum, i) => {
              return (
                <tbody>
                  <tr>
                    <th>{auctionPlayersState[playerNum].name}</th>
                    <td>{auctionPlayersState[playerNum].balance}</td>
                  </tr>
                </tbody>
              );
            })}
          </TableContainer>
          {auctionPlayersState && invalidBid.length === 0 && (
            <div>
              {Object.values(auctionPlayersState)[activeTurnState][`name`]},
              this is your turn to bid <br />
              your current balance is: $
              {Object.values(auctionPlayersState)[activeTurnState][`balance`]}
              <br />
              <label>make your bid:</label>
              <br />
              {console.log(Object.values(auctionPlayersState)[activeTurnState])}
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
          {Object.values(auctionPlayersState)[activeTurnState][`name`]} has
          placed a bid of ${bidState} <br />
          <button onClick={endBidTurn}>Confirm</button>
        </Container>
      );
    else if (bidPhase === "Auction-end")
      return (
        <Container>
          Auction ended the winner is:
          <div>
            {/* {console.log(Object.entries(auctionPlayersState)[0][1])} */}
            <h2>{Object.values(auctionPlayersState)[0][`name`]}</h2>
            <p>
              wins the auction over the new property
              <br />
              at the cost of: ${bidState}
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
      setSellAssetState={setSellAssetState}
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
