import React from "react";

const VisitJailOrParking = (props) => {

  if(props.inTurnLocationState.forSale)
  return (
    <div>
        visiting in Jail
        <button onClick={props.buy}>   
        Make a move
    </button>
    </div>
  );

};

export default VisitJailOrParking;