import React, { useEffect, useState } from "react";
import CardDisplay from "../card-display/CardDisplay";
import { useRecoilState } from "recoil";
import {gameboardData}  from "../../../atoms"
import { ConnectionBase } from "mongoose";
import axiosInstance from "../../../axioscall"


const ActiveUserManager = (props) => {
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);
  const [inTurnLocationState,setinTurnLocationState] = useState({})


  const turnEffect = ()=>{
    payRent()
    console.log(inTurnLocationState)

  }

  const buyOrSale =()=>{
  }  
  
  const buy = (adress)=>{
    // setgameboardData(adress)


  }
  const payRent =()=>{
    if(inTurnLocationState.forSale){console.log(`want to buy?`)}
    else if(inTurnLocationState.cardDetails) console.log("pay")
  }
  
  const loadLocationCard =()=>{
    let currentLocationData = {}
    gameboardDataState.find((rowOrColumn)=>{
      const ans =  Object.values(rowOrColumn).find((singleAsset)=>{
        return singleAsset.fieldNum === props.activePlayerState.playerLocation
      })
      currentLocationData = ans
      return ans 
    })
    setinTurnLocationState(currentLocationData)

  }

  const genTurn= ()=>{
    props.rollDice()
    loadLocationCard()
    turnEffect()

  }


  return (
    <>
      <div>
        {props.diceState[3] && (
          <button onClick={genTurn}>Roll Dice</button>
        )}
        <button onClick={buyOrSale}>Buy/Sell</button>
        <button onClick={props.endTurn}>End turn</button>
        <button onClick={loadLocationCard}>load Location Card</button>
        <CardDisplay />
      </div>
    </>
  );
};

export default ActiveUserManager;
