import React from "react";
import AssetCard from "./AssetsCard"

const AssetCardTopRow = ({
    headerColor}) => {


      return (
          <AssetCard
          assetHeight="3.5rem" assetWidth="1.77rem"
          headerheight= "1.313rem" headerWidth="1.77rem"
          headerDirection="column-reverse" headerRotation="rotate(180deg)"
          headerColor = "yellow"
          abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"
          headerColor={headerColor}>
          </AssetCard>
  );
};

export default AssetCardTopRow;


