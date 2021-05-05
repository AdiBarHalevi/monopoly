import React from "react";

const LandedOnAsset = (props) => {

  if(props.inTurnLocationState.forSale)
  return (
    <div>
        <div>{props.activeUserState.name} makes a move</div>
        <div>{props.activeUserState.balance} has a balance of</div>
        <div>would you like to buy {props.inTurnLocationState.name}</div>
        <div>at the price of {props.inTurnLocationState.price}</div>
      <button onClick={props.buy}> buy</button>
      <button> decline</button>
    </div>
  );
  return <>
  <div>
    <div>{props.activeUserState.name} has landed on {props.inTurnLocationState.name} and its owned </div>
  
    
    <button onClick={props.buy}>   
        Confirm
    </button>
  </div>
  </>
};

export default LandedOnAsset;

