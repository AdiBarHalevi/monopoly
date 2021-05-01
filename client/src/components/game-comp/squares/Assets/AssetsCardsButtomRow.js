import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardButtomRow = ({ headerColor, headerTitle }) => {
  return (
    <AssetCard
      assetHeight="3.5rem"
      assetWidth="1.77rem"
      headerheight="1.313rem"
      headerWidth="1.77rem"
      headerDirection="column"
      headerRotation="0deg"
      abosoluteTopPosition="1.5rem"
      abosoluteLeftPosition="0rem"
      headerColor={headerColor}
      headerTitle={headerTitle}
    ></AssetCard>
  );
};

export default AssetCardButtomRow;
