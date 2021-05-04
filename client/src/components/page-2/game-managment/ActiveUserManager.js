import React from "react";
import CardDisplay from "../card-display/CardDisplay";

const ActiveUserManager = (props) => {
  return (
    <>
      <div>
        {props.diceState[3] && (
          <button onClick={props.rollDice}>Roll Dice</button>
        )}
        <button onClick={()=>console.log(props.activePlayerState)}>Buy/Sell</button>
        <button onClick={props.endTurn}>End turn</button>
        <CardDisplay />
      </div>
    </>
  );
};

export default ActiveUserManager;
