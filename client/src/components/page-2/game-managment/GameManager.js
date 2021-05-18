import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { GamePlayDataState, activeUserData } from "../../../atoms";
import ActiveUserManager from "./ActiveUserManager";
import { updateUserReq, primaryPlayersLoad } from "../../../axioscall";

const GameManager = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  // const gameboardDataState = useRecoilValue(
  //   gameCardsData
  // );

  // const setrenderState = useSetRecoilState(shouldLayoutChange);

  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const [turnState, setTurnState] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await primaryPlayersLoad();
      setPlayersDataState(data);
      setActiveUserDataState(data[turnState]);
    }
    fetchData();
  }, [setPlayersDataState, setActiveUserDataState, turnState]); // Or [] if effect doesn't need props or state

  // const retirePlayerFunc = async () => {
  //   // must have a player to retire
  //   retirePlayer();
  // };

  // validates the turn, once a turn is over it passes the turn to the next player
  const turnUpdate = () => {
    let turn = turnState;
    if (turn === playersDataState.length - 1) {
      setTurnState(0);
      setActiveUserDataState(playersDataState[0]);
    } else {
      turn++;
      setTurnState(turn);
      setActiveUserDataState(playersDataState[turn]);
    }
  };

  // ends the turn, saves the changes
  const endGameCheck = () => {
    const filterIt = playersDataState.filter((user) => user.isActive);
    if (filterIt.length === 1) return true;
    return false;
  };

  const endTurn = async () => {
    if (!endGameCheck()) {
      turnUpdate();
      await updateUserReq(activeUserDataState);
    } else {
      window.alert("you are the winner!");
    }
  };

  // useEffect(() => {
  //   // if(activeUserDataState) updatePlayerMovement()
  // }, [activeUserDataState]);

  // useEffect(() => {
  //   updatePlayerMovement()
  // }, [renderGlobalState]);

  // const updatePlayerMovement = () => {
  //   // active player's avatar
  //   // field num for the API request
  //   const previousLocation =
  //     playersDataState[activeUserDataState.playersTurnNumber - 1]
  //       .currentLocation;
  //   const gameboardDatatry = { ...gameboardDataState };
  //   const changeAvatarToNewLocation = {
  //     ...gameboardDatatry[activeUserDataState.currentLocation],
  //   };
  //   changeAvatarToNewLocation[`avatar`] = activeUserDataState.avatar;
  //   const updates = {
  //     newLocationData: changeAvatarToNewLocation,
  //     previousLocation,
  //   };
  //   updateLocationOnMap(activeUserDataState.currentLocation, updates);
  //   setrenderState(true);
  // };

  return (
    <Container>
      {/* <button onClick={()=>{console.log(activeUserDataState)}}>CHECK</button> */}
      <ActiveUserManager
        endTurn={endTurn}
        // updatePlayerMovement={updatePlayerMovement}
      />
    </Container>
  );
};

export default GameManager;

const Container = styled.div`
  background: black;
  @media (max-width: 750px) {
    display: flex;
    font-size: 12px;
    position: absolute;
    top: 40%;
    right: 30%;
    flex-direction: column;
  }
`;
