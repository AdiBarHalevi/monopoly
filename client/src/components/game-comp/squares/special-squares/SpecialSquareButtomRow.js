import React from "react";
import SpecialSquare from "./SpcialSquares";

const SpecialSquareButtomRow = ({ image }) => {
  return (
    <SpecialSquare
      assetHeight="3.5rem"
      assetWidth="1.77rem"
      headerheight="1.313rem"
      headerWidth="1.77rem"
      headerDirection="column"
      headerRotation="0deg"
      abosoluteTopPosition="0rem"
      abosoluteLeftPosition="0rem"
      image={image}
    ></SpecialSquare>
  );
};

export default SpecialSquareButtomRow;
