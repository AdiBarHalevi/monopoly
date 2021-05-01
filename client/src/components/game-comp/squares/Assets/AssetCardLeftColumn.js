import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardLeftColumn = ({
    headerColor}) => {


      return (
          <AssetCard
          assetHeight="1.77rem" assetWidth="3.5rem"
          headerheight= "1.77rem" headerWidth="1.313rem"
          headerDirection="row-reverse" headerRotation="rotate(90deg)"
          abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
          headerColor={headerColor}>   
          </AssetCard>
  );
};

export default AssetCardLeftColumn;
