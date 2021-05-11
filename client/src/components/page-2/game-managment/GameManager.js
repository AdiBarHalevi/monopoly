import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState, activeUserData,gameboardData,renderState } from "../../../atoms";
import ActiveUserManager from "./ActiveUserManager";
import {
  retirePlayer,
  updateUserReq,
  primaryPlayersLoad,
  getaUserListFromApi,
  updateTheGameLayout
} from "../../../axioscall";
import CardDisplay from "../card-display/CardDisplay";
import { set } from "mongoose";

const GameManager = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const [gameboardDataState, setlayoutDataState] = useRecoilState(gameboardData);

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
    if (turn === playersDataState.length - 1) setTurnState(0);
    else setTurnState((turn += 1));
    setActiveUserDataState(playersDataState[turnState]);
  };

  // ends the turn, saves the changes
  const endGameCheck =()=>{
    const filterIt = playersDataState.filter((user)=>{
      if (user.isActive) return user 
    })
    if(filterIt.length===1) return true
    return false


  }
  const endTurn = () => {
    if(!endGameCheck()){
      turnUpdate();
      savetoAPI();
    }
    else {window.alert("you are the winner!")}
  };

  useEffect(() => {
    primaryPlayersLoad(setPlayersDataState, setActiveUserDataState, turnState);
  }, []);

  const logit = ()=>{
    // active player's avatar 
    // field num for the API request
    const previousLocation = playersDataState[activeUserDataState.playersTurnNumber-1].currentLocation
    const gameboardDatatry = {...gameboardDataState}
    const changeAvatarToNewLocation = {...gameboardDatatry[activeUserDataState.currentLocation]}
    changeAvatarToNewLocation[`avatar`]=activeUserDataState.avatar
    const updates={newLocationData:changeAvatarToNewLocation,
      previousLocation}
    updateTheGameLayout(activeUserDataState.currentLocation,updates)
    setrenderState(true)
  }

  return (
    <>
      <CardDisplay />
      <button onClick={logit}>logit</button>
      <ActiveUserManager endTurn={endTurn} saveChanges={savetoAPI} />
    </>
  );
};

export default GameManager;
