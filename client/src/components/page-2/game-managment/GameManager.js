import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../../atoms";
import ActiveUserManager from "./ActiveUserManager";
import axiosInstance from "../../../axioscall";
import CardDisplay from "../card-display/CardDisplay";

const GameManager = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const [turnState, setTurnState] = useState(0);
  const [activeUserState, setActiveUserState] = useState([]);

  // updates the last active user state and saves the changes
  const updateUserReq = async () => {
    try {
      const body = JSON.stringify(activeUserState);
       await axiosInstance.put(`/gameAPI/users/update`, {
        body: body,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // by the end of each turn the users list updates with the server
  const updateUserList = async () => {
    const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
    setPlayersDataState(res.data);
  };

  // on Start button click loads the players to the board and saves the active player
  const primaryPlayersLoad = async () => {
    const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
    setPlayersDataState(res.data);
    setActiveUserState(playersDataState[turnState]);
  };

  // saves data to the API - updates the users data on both sides
  const savetoAPI = () => {
    updateUserReq();
    updateUserList();
  };

  // validates the turn, once a turn is over it passes the turn to the next player
  const turnValidator = () => {
    let turn = turnState;
    if (turn === playersDataState.length - 1) setTurnState(0);
    else setTurnState((turn += 1));
    setActiveUserState(playersDataState[turnState]);
  };

  // saves the changes in the local global state and in the server
  const saveChanges = (variant) => {
    setActiveUserState(variant);
    savetoAPI();
  };

  // ends the turn, saves the changes
  const endTurn = (activeUser) => {
    turnValidator();
    saveChanges(activeUser);
  };

  // const buyAsset = (locationCard) => {};

  return (
    <>
      <button onClick={primaryPlayersLoad}> Start the game</button>
      <CardDisplay />
      <ActiveUserManager
        endTurn={endTurn}
        activeUser={playersDataState[turnState]}
        saveChanges={saveChanges}
      />
    </>
  );
};

export default GameManager;
