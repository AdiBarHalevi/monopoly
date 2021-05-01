import React from "react";
import SpecialSquare from "./SpcialSquares";

const SpecialSquareRightColumn = ({ image }) => {
  return (
    <SpecialSquare
      assetHeight="1.77rem"
      assetWidth="3.5rem"
      headerheight="1.77rem"
      headerWidth="1.313rem"
      headerDirection="row-reverese"
      headerRotation="rotate(270deg)"
      abosoluteTopPosition="1.1rem"
      abosoluteLeftPosition="-1rem"
      image={image}
    ></SpecialSquare>
  );
};

export default SpecialSquareRightColumn;
