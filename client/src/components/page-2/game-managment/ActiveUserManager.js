import React, { useEffect, useState } from "react";
import CardDisplay from "../card-display/CardDisplay";
import { getRandomInt } from "../../../UtilityFunctions";
import { useRecoilState } from "recoil";
import {gameboardData}  from "../../../atoms"
import { ConnectionBase } from "mongoose";
import axiosInstance from "../../../axioscall"


const ActiveUserManager = (props) => {
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);
  const [inTurnLocationState,setinTurnLocationState] = useState({})
  const [diceState, setdiceState] = useState([0, 0, 0, true]);

  const [activeUserState,setActiveUserState] = useState({})



  const handleClick = async()=>{
    setActiveUserState(props.activeUser)
  }

  const rollDice = () => {
    setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), diceState[2], false])};

  const updateLocation =()=>{
    const update = {...activeUserState}
    if((update[`currentLocation`] +diceState[1]+diceState[0])<40) update[`currentLocation`] += (diceState[1]+diceState[0])
    else update[`currentLocation`] = (diceState[1]+diceState[0]+update[`currentLocation`])-40
    setActiveUserState(update)
  }

  const finishTurn =()=>{
    props.endTurn(activeUserState)
    props.saveChanges(activeUserState)
    setdiceState([diceState[0], diceState[1], diceState[2], true]);
    setActiveUserState(props.activeUser)

  }



  useEffect(()=>{
    props.saveChanges(activeUserState)

  },[activeUserState])


  useEffect(()=>{
    updateLocation()
    turnEffect()
  },[diceState])

  const turnEffect = ()=>{
    loadLocationCard()
    payRent()
  }

  const buyOrSale =()=>{
    const payOrBuy = payRent()
    if(payOrBuy) buy()
  }  
  
  const buy = (adress)=>{
    console.log(inTurnLocationState)
    // setgameboardData(adress)


  }

  const payRent =()=>{
    if(inTurnLocationState.forSale){ 
      console.log(` buy?`)
      return true}
    else if(inTurnLocationState.cardDetails){
      console.log("pay")
      return false}
  }
  
  const loadLocationCard =()=>{
    if(activeUserState.currentLocation){
    let currentLocationData = {}
    gameboardDataState.find((rowOrColumn)=>{
      const ans =  Object.values(rowOrColumn).find((singleAsset)=>{
        return singleAsset.fieldNum === activeUserState.currentLocation
      })
      currentLocationData = ans
      return ans 
    })
    setinTurnLocationState(currentLocationData)
    console.log(inTurnLocationState)
  }
  }

  // const genTurn= ()=>{
  //   props.rollDice()
  //   loadLocationCard()
  //   turnEffect()

  // }

    
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
                <th>
                    users turn
                </th>
                <td>
                    {activeUserState.name}
                </td>
            </tr>
            <tr>
                <th>
                  currentLocation
                </th>
                <td>
                    {activeUserState.currentLocation}
                </td>
            </tr>
            <tr>
                <th>
                  Dice score
                </th>
                <td>
                    {diceState[0]}
                </td>
                <td>
                    {diceState[1]}
                </td>
            </tr>
          </tbody>
        </table>
        {diceState[3] && 
        <button onClick={rollDice}>Roll Dice</button>        
        }
        <button onClick={finishTurn}>End turn</button>
        <button onClick={buyOrSale}>Buy/Sell</button>
        <CardDisplay /> 
        {/* {props.diceState[3] && (
        )}
        <button onClick={loadLocationCard}>load Location Card</button>
        */}
      </div>
    </>
  );
};

export default ActiveUserManager;
