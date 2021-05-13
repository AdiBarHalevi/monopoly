import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardLeftColumn = (data) => {
  return (
    <AssetCard
      assetHeight="3.4rem"
      assetWidth="6rem"
      headerheight="4em"
      headerWidth="1.2rem"
      headerDirection="row-reverse"
      headerRotation="rotate(90deg)"
      abosoluteTopPosition="1.6rem"
      abosoluteLeftPosition="-2rem"
      data={data}
    ></AssetCard>
  );
};

export default AssetCardLeftColumn;
