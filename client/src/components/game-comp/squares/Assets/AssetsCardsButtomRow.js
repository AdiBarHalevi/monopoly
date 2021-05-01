import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardButtomRow = ({
    headerColor}) => {


      return (
          <AssetCard
          assetHeight="3.5rem" assetWidth="1.77rem"
          headerheight= "1.313rem" headerWidth="1.77rem"
          headerDirection="column" headerRotation="0deg"
          abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"
          headerColor={headerColor}>   
          </AssetCard>
  );
};

export default AssetCardButtomRow;