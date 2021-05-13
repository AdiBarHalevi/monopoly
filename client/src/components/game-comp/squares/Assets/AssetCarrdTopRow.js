import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardTopRow = (data) => {
  return (
    <AssetCard
      assetHeight="4rem"
      assetWidth="4.1rem"
      headerheight="1.2rem"
      headerWidth="4rem"
      headerDirection="column-reverse"
      headerRotation="rotate(180deg)"
      abosoluteTopPosition="-1.8rem"
      abosoluteLeftPosition="0.8rem"
      data={data}
    />
  );
};

export default AssetCardTopRow;
