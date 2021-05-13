import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  GamePlayDataState,
  activeUserData,
  gameboardData,
  renderState,
} from "../../../atoms";
import ActiveUserManager from "./ActiveUserManager";
import {
  retirePlayer,
  updateUserReq,
  primaryPlayersLoad,
  getaUserListFromApi,
  updateLocationOnMap,
} from "../../../axioscall";
import CardDisplay from "../card-display/CardDisplay";
import styled from "styled-components";

const GameManager = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const [gameboardDataState, setlayoutDataState] = useRecoilState(
    gameboardData
  );

  const [renderGlobalState, setrenderState] = useRecoilState(renderState);

  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const [turnState, setTurnState] = useState(0);

  const retirePlayerFunc = async () => {
    // must have a player to retire
    retirePlayer();
  };

  // saves data to the API - updates the users data on both sides
  const savetoAPI = () => {
    // updates the last active user state and saves the changes
    updateUserReq(activeUserDataState);
    // by the end of each turn the users list updates with the server and requests all the active users
    getaUserListFromApi(setPlayersDataState);
  };

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
    const filterIt = playersDataState.filter((user) => {
      if (user.isActive) return user;
    });
    if (filterIt.length === 1) return true;
    return false;
  };
  const endTurn = () => {
    if (!endGameCheck()) {
      turnUpdate();
      savetoAPI();
    } else {
      window.alert("you are the winner!");
    }
  };

  useEffect(() => {
    primaryPlayersLoad(setPlayersDataState, setActiveUserDataState, turnState);
  }, []);

  useEffect(() => {
    // if(activeUserDataState) updatePlayerMovement()
  }, [activeUserDataState]);

  const updatePlayerMovement = () => {
    // active player's avatar
    // field num for the API request
    const previousLocation =
      playersDataState[activeUserDataState.playersTurnNumber - 1]
        .currentLocation;
    console.log(previousLocation);
    const gameboardDatatry = { ...gameboardDataState };
    const changeAvatarToNewLocation = {
      ...gameboardDatatry[activeUserDataState.currentLocation],
    };
    changeAvatarToNewLocation[`avatar`] = activeUserDataState.avatar;

    console.log(changeAvatarToNewLocation);
    const updates = {
      newLocationData: changeAvatarToNewLocation,
      previousLocation,
    };
    updateLocationOnMap(activeUserDataState.currentLocation, updates);
    setrenderState(true);
  };

  return (
    <Container>
      <ActiveUserManager
        endTurn={endTurn}
        saveChanges={savetoAPI}
        updatePlayerMovement={updatePlayerMovement}
      />
    </Container>
  );
};

export default GameManager;

const Container = styled.div`
  background:black;
  border:1px solid gold;
  @media (max-width:600px){
    font-size:12px;
    position:absolute;
    top:27%;
    right:35%;
  }

`