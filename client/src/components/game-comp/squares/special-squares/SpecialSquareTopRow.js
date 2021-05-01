import React from "react";
import SpecialSquare from "./SpcialSquares"

const SpecialSquareTopRow = ({
    image}) => {


      return (
          <SpecialSquare
          assetHeight="3.5rem" assetWidth="1.77rem"
          headerheight= "1.313rem" headerWidth="1.77rem"
          headerDirection="column-reverse" headerRotation="rotate(180deg)"
          headerColor = "yellow"
          abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"
          image={image}>
          </SpecialSquare>
  );
};

export default SpecialSquareTopRow;