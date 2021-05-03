import React, { useEffect, useState } from "react";
// import {GamePlayData} from "../../../atoms";
import { useRecoilState } from "recoil";
import {GamePlayDataState} from "../../../atoms"




const PlayerManager = () => {

  const [playersDataState, setPlayersDataState]= useRecoilState(GamePlayDataState)

  const shuffle=(array)=> array.sort(() => Math.random() - 0.5);
  
  const useIt=()=>{
    let usersList = localStorage.getItem("users")
    usersList = usersList.split(",")
    const usersData = []
    shuffle(usersList).forEach((user,index) => {
      user={
        name:user,
        balance:1000,
        assets:[],
        active:true,
        turnNum:index+1,
        playerLocation:0
      }
      usersData.push(user)
    });

    setPlayersDataState(usersData)
    console.log(playersDataState)
  };

  
  return (
    <>
    <button onClick={useIt}>usersdata
      </button></>
  );
};

export default PlayerManager;


