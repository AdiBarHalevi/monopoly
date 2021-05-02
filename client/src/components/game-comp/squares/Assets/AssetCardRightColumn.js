import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardRightColumn = (data) => {
  return (
    <AssetCard
      assetHeight="1.77rem"
      assetWidth="3.5rem"
      headerheight="1.77rem"
      headerWidth="1.313rem"
      headerDirection="row-reverese"
      headerRotation="rotate(270deg)"
      abosoluteTopPosition="2px"
      abosoluteLeftPosition=" 1.4rem;"
      data={data}
    ></AssetCard>
  );
};

export default AssetCardRightColumn;
