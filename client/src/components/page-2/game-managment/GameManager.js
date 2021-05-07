import React, {useEffect, useState} from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState, activeUserData } from "../../../atoms";
import ActiveUserManager from "./ActiveUserManager";
import {retirePlayer,updateUserReq,primaryPlayersLoad,getaUserListFromApi} from "../../../axioscall";
import CardDisplay from "../card-display/CardDisplay";

const GameManager = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const [turnState, setTurnState] = useState(0);

  
  
  const retirePlayerFunc =async()=>{
    // must have a player to retire
    retirePlayer()
  }
  
  // saves data to the API - updates the users data on both sides
  const savetoAPI = () => {
    // updates the last active user state and saves the changes
    updateUserReq(activeUserDataState);
    // by the end of each turn the users list updates with the server and requests all the active users 
    getaUserListFromApi(setPlayersDataState);
  };

  // validates the turn, once a turn is over it passes the turn to the next player
  const turnValidator = () => {
    let turn = turnState;
    if (turn === playersDataState.length - 1) setTurnState(0);
    else setTurnState((turn += 1));
    setActiveUserDataState(playersDataState[turnState]);
  };

  // ends the turn, saves the changes
  const endTurn = () => {
    turnValidator();
    savetoAPI();
  };

  useEffect(()=>{
    console.log("primaryPlayersLoad")
    primaryPlayersLoad(setPlayersDataState,setActiveUserDataState,turnState)
  },[])

  return (
    <>
      <CardDisplay />
      <ActiveUserManager endTurn={endTurn} saveChanges={savetoAPI} />
    </>
  );
};

export default GameManager;
