import React, { useEffect, useState } from "react";
import BuytheAsset from "./BuytheAsset"
import PayTheRent from "./PayRent"


const LandedOnAsset = (props) => {


  const {inTurnLocationState,activeUserState,confirm} =props

  const [buyTheAssetState,setbuytheAssetState] = useState(false)

  const buyAsset = ()=>{
    const tempActiveUser = {...activeUserState}
    const tempLocationState = {...inTurnLocationState}
    const activeUserassetsUpdate = []
    activeUserassetsUpdate.push(tempLocationState,tempActiveUser[`property`])
    tempActiveUser[`balance`] -= tempLocationState[`price`]
    tempActiveUser[`property`] = activeUserassetsUpdate
    tempLocationState[`forSale`]= false
    tempLocationState[`property`]= [tempActiveUser.name,tempActiveUser.playersTurnNumber,tempActiveUser._id]
    props.setinTurnLocationState(tempLocationState)
    props.setActiveUserState(tempActiveUser)
    setbuytheAssetState(false)
    props.confirm()
  
  }





  if(props.boxState) {
      if(inTurnLocationState.forSale)
      return (
        <div>
            <div>{activeUserState.name} makes a move</div>
            <div>{activeUserState.balance} has a balance of</div>
            <div>would you like to buy {inTurnLocationState.name}</div>
            <div>at the price of {inTurnLocationState.price}</div>
          <button onClick={buyAsset}> buy</button>
          <button onClick={confirm}> decline</button>
        </div>
      );
      else return <PayTheRent
       activeUserState={activeUserState}
      inTurnLocationState={inTurnLocationState}
      setActiveUserState={props.setActiveUserState}
      confirm ={confirm}
      />

  } 
  else if(buyTheAssetState&&props.boxState)
    return <BuytheAsset
    activeUserState={activeUserState}
    confirm = {confirm}
    setbuytheAssetState={setbuytheAssetState}/>
  
  else return <></>
  
};

export default LandedOnAsset;

