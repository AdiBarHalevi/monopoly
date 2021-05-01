import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardLeftColumn = ({ headerColor, headerTitle }) => {
  return (
    <AssetCard
      assetHeight="1.77rem"
      assetWidth="3.5rem"
      headerheight="1.77rem"
      headerWidth="1.313rem"
      headerDirection="row-reverse"
      headerRotation="rotate(90deg)"
      abosoluteTopPosition="0.2rem"
      abosoluteLeftPosition="-2rem"
      headerColor={headerColor}
      headerTitle={headerTitle}
    ></AssetCard>
  );
};

export default AssetCardLeftColumn;
