import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState, activeUserData } from "../../../atoms";
import ActiveUserManager from "./ActiveUserManager";
import axiosInstance from "../../../axioscall";
import CardDisplay from "../card-display/CardDisplay";

const GameManager = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const [turnState, setTurnState] = useState(0);

  // updates the last active user state and saves the changes
  const updateUserReq = async () => {
    try {
      const body = JSON.stringify(activeUserDataState);
      await axiosInstance.put(`/gameAPI/users/update`, {
        body: body,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // by the end of each turn the users list updates with the server
  const getaUserListFromApi = async () => {
    const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
    setPlayersDataState(res.data);
  };

  // on Start button click loads the players to the board and saves the active player
  const primaryPlayersLoad = async () => {
    const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
    setPlayersDataState(res.data);
    // setActiveUserState(res.data[turnState]);
    setActiveUserDataState(res.data[turnState]);
  };

  // saves data to the API - updates the users data on both sides
  const savetoAPI = () => {
    updateUserReq();
    // to be added when i will have online LAN game
    getaUserListFromApi();
  };

  // validates the turn, once a turn is over it passes the turn to the next player
  const turnValidator = () => {
    let turn = turnState;
    if (turn === playersDataState.length - 1) setTurnState(0);
    else setTurnState((turn += 1));
    setActiveUserDataState(playersDataState[turnState]);
    // setActiveUserState(playersDataState[turnState]);
  };

  // saves the changes in the local global state and in the server
  const saveChanges = () => {
    savetoAPI();
  };

  // ends the turn, saves the changes
  const endTurn = () => {
    turnValidator();
    saveChanges();
  };

  useEffect(() => {
    console.log("changed to", activeUserDataState);
  }, [activeUserDataState]);

  return (
    <>
      <button onClick={primaryPlayersLoad}> Start the game</button>
      <CardDisplay />
      <ActiveUserManager endTurn={endTurn} saveChanges={saveChanges} />
    </>
  );
};

export default GameManager;
