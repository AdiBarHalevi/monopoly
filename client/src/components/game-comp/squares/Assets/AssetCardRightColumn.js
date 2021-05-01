import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardRightColumn = ({
    headerColor}) => {


      return (
          <AssetCard
          assetHeight="1.77rem" assetWidth="3.5rem"
          headerheight= "1.77rem" headerWidth="1.313rem"
          headerDirection="row-reverese"  headerRotation="rotate(270deg)"
          abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
          headerColor={headerColor}>   
          </AssetCard>
  );
};

export default AssetCardRightColumn;
