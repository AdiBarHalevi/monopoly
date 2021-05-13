import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardRightColumn = (data) => {
  return (
    <AssetCard
      assetHeight="3.4rem"
      assetWidth="6rem"
      headerheight="4rem"
      headerWidth="1.2rem"
      headerDirection="row-reverese"
      headerRotation="rotate(270deg)"
      abosoluteTopPosition="1.6rem"
      abosoluteLeftPosition=" 1.4rem;"
      data={data}
    ></AssetCard>
  );
};

export default AssetCardRightColumn;
