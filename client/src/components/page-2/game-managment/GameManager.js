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

  const updateUserReq = async () => {
    try {
      const body = JSON.stringify(activeUserState);
      await axiosInstance.put(`/gameAPI/users/update`, { body: body });
    } catch (e) {
      console.log(e);
    }
  };

  const reloadUsers = async () => {
    const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
    setPlayersDataState(res.data);
  };

  const savetoAPI = () => {
    updateUserReq();
  };

  const turnValidator = () => {
    let turn = turnState;
    if (turn === playersDataState.length - 1) setTurnState(0);
    else setTurnState((turn += 1));
    setActiveUserState(playersDataState[turnState]);
  };

  const saveChanges = (variant) => {
    setActiveUserState(variant);
    savetoAPI();
  };

  const endTurn = (activeUser) => {
    turnValidator();
    saveChanges(activeUser);
    reloadUsers();
  };

  const buyAsset = (locationCard) => {};

  return (
    <>
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
