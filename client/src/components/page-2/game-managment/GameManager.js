import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState} from "../../../atoms";
import styled from "styled-components";
import PlayerManager from "./PlayerManager";
import ActiveUserManager from "./ActiveUserManager";
import axiosInstance from "../../../axioscall"
import { getRandomInt } from "../../../UtilityFunctions";

const GameManager = () => {

  const [playersDataState, setPlayersDataState] = useRecoilState(GamePlayDataState);
  const [turnState, setTurnState] = useState(0)
  const [activeUserState,setActiveUserState] = useState([])

  const updateUserReq = async () => {
    try {
      const body = JSON.stringify(activeUserState)
      const req = await axiosInstance.put(`/gameAPI/users/update`,{body:body})
    } catch (e) {
      console.log(e);
    }
  };

  const reloadUsers = async()=>{
    const res = await axiosInstance.get(`/gameAPI/users/getAll/1`)
    setPlayersDataState(res.data)
  }

  const savetoAPI =()=>{
    updateUserReq()
  }


  const turnValidator = ()=>{
    let turn = turnState
    if(turn === playersDataState.length-1) setTurnState(0)
    else setTurnState(turn += 1)
    setActiveUserState(playersDataState[turnState])
  }

  const saveChanges = (variant)=>{
    setActiveUserState(variant)
    savetoAPI()
    
  }
  
  const endTurn = (activeUser)=>{
    turnValidator()
    saveChanges(activeUser)
    reloadUsers()
  }

  const buyAsset = (locationCard)=>{

  }
  
 
          return (
      <>
        <ActiveUserManager
          endTurn={endTurn}
          activeUser={playersDataState[turnState]}
          saveChanges={saveChanges}/>

      </>
    );
  // }
};

export default GameManager;

const TurnTable = styled.table`
  width: 18rem;
  text-align: left;
`;



      // let locationUpdate = [...playersDataState]
      // let turntemp = turnState
      // let userTemp = locationUpdate[turntemp]
      // // userTemp[`name`]="jalwam"
      // activeUser[`currentLocation`] = 2
      // console.log(activeUser)
      // console.log(locationUpdate[turnState])
      // // locationUpdate[`turntemp`][`currentLocation`]=activeUser
      // // setPlayersDataState(locationUpdate)


              {/* <PlayerManager />
        <TurnTable>
          <tbody>
            <tr>
              <th>Player's Turn</th>
              <td>{activePlayerState.name}</td>
            </tr>
            <tr>
              <th>Current Location</th>
              <td>{activePlayerState.playerLocation}</td>
            </tr>
          </tbody>
        </TurnTable>
        <ActiveUserManager
          endTurn={endTurn}
          rollDice={rollDice}
          diceState={diceState}
          activePlayerState={activePlayerState}
          
        /> */}


         // const saveToGlobalUserData = () => {
    //   const update = [];
    //   playersDataState.forEach((player) => {
  //     if (player.name === activePlayerState.name) {
    //       const newPlayerStatus = {
      //         ...player,
      //       };
      //       newPlayerStatus[`playerLocation`] = activePlayerState.playerLocation;
      //       update.push(newPlayerStatus);
      //     } else update.push(player);
      //   });
      //   setPlayersDataState(update);
      // };
      
      // // finishes the players Turn and sets the Active user to the next player
      // const endTurn = () => {
        //   saveToGlobalUserData();
        //   let whosturn = diceState[2];
        //   whosturn++;
        //   if (whosturn < playersDataState.length) {
          //     const activeUser = playersDataState[whosturn];
  //     setdiceState([diceState[0], diceState[1], whosturn, true]);
  //     setActivePlayerState(activeUser);
  //   } else {
    //     whosturn = 0;
    //     const activeUser = playersDataState[0];
  //     setdiceState([diceState[0], diceState[1], whosturn, true]);
  //     setActivePlayerState(activeUser);
  //   }
  // };
  
  // // genereate Dice roll (keeps the players turn)
  // const rollDice = () => {
    //   setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), diceState[2], false]);
    
    //   // set changes on the Active User State
    //   const update = { ...activePlayerState };
    //   if (update[`playerLocation`] + (diceState[0] + diceState[1]) >= 40)
    //     update[`playerLocation`] += diceState[0] + diceState[1] - 40;
    //   else update[`playerLocation`] += diceState[0] + diceState[1];
    
    //   setActivePlayerState(update);
    // };
    
    // useEffect(() => {
      //   setActivePlayerState(playersDataState[diceState[2]]);
      // }, [playersDataState]);
      
      // useEffect(()=>{
        //   console.log(activePlayerState)
        //   console.log(activePlayerState.playerLocation)
        
        // },[diceState])
        
        
        // if (activePlayerState) {