import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardButtomRow = (data) => {
  return (
    <AssetCard
      assetHeight="4rem"
      assetWidth="4.1rem"
      headerheight="1.2rem"
      headerWidth="4.1rem"
      headerDirection="column"
      headerRotation="0deg"
      abosoluteTopPosition="1.5rem"
      abosoluteLeftPosition="0.8rem"
      data={data}
    ></AssetCard>
  );
};

export default AssetCardButtomRow;
