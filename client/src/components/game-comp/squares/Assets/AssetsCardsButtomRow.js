import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardButtomRow = (data) => {
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
      data={data}
    ></AssetCard>
  );
};

export default AssetCardButtomRow;
