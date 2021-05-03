import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {GamePlayDataState} from "../../../atoms"
import styled from "styled-components";
import PlayerManager from "./PlayerManager"
import {getRandomInt} from "../../../UtilityFunctions"


const GameManager = () => {

  const [activePlayerState,setActivePlayerState] = useState({})
  const [diceState,setdiceState] = useState([0,0,0])
  const [playersDataState, setPlayersDataState]= useRecoilState(GamePlayDataState)

  const saveToGlobalUserData=()=>{
    const update = []
    playersDataState.map((player)=>{
      if(player.name === (activePlayerState.name)) {
        const newPlayerStatus={
          ...player
        }
        newPlayerStatus[`playerLocation`]= activePlayerState.playerLocation
        update.push(newPlayerStatus)
      } else update.push(player)
    })
    setPlayersDataState(update)

  }


  // finishes the players Turn and sets the Active user to the next player
  const endTurn =()=>{
    saveToGlobalUserData()
    let whosturn =  diceState[2]
    whosturn++
    if(whosturn < playersDataState.length) {
      const activeUser = playersDataState[whosturn]
      setdiceState([diceState[0],diceState[1], whosturn])
      setActivePlayerState(activeUser)
    }
    else{
      whosturn=0
      const activeUser = playersDataState[0]
      setdiceState([diceState[0],diceState[1], whosturn])
      setActivePlayerState(activeUser)
    }
  }

  // genereate Dice roll (keeps the players turn)
  const RollDice =()=>{ 

    setdiceState([getRandomInt(1,7),getRandomInt(1,7), diceState[2]])

    // set changes on the Active User State
    const update = {...activePlayerState}
    console.log(diceState[0]+diceState[1])
    update[`playerLocation`]+=(diceState[0]+diceState[1])
    setActivePlayerState(update)

  }

  // useEffect(()=>{
  //   setActivePlayerState(playersDataState[0])
  //   setdiceState([0,0,0])
  //   console.log(activePlayerState)

  // },[])

  useEffect(()=>{
    setActivePlayerState(playersDataState[diceState[2]])
    
  },[])
  
  
  if(activePlayerState){
  return (
    <TurnTable>
      <PlayerManager/>
      <tr>
        <th>Player's Turn</th>
        <td>{activePlayerState.name}</td>
      </tr>
      <tr>
        <th>Current Location</th>
        <td>{activePlayerState.playerLocation}</td>
      </tr>
      <tr>
        <td><button onClick={endTurn}>End turn</button></td>
        <td><button onClick={RollDice}>Roll Dice</button></td>
        {/* <td><span>dice result</span> <span>{activePlayerState.playerLocation}</span></td> */}
      </tr>
  </TurnTable>
  );
} else return (
    <TurnTable>
      <PlayerManager/>
    </TurnTable>
    )
};

export default GameManager;

const TurnTable = styled.table`
  width:18rem;
  text-align:left;
`;
