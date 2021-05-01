import React from "react";
import AssetCard from "./AssetsCard";

const AssetCardTopRow = ({ headerColor, headerTitle }) => {
  return (
    <AssetCard
      assetHeight="3.5rem"
      headerheight="1.313rem"
      headerWidth="1.77rem"
      headerDirection="column-reverse"
      headerRotation="rotate(180deg)"
      abosoluteTopPosition="-1.8rem"
      abosoluteLeftPosition="0rem"
      headerColor={headerColor}
      headerTitle={headerTitle}
    >
      {" "}
    </AssetCard>
  );
};

export default AssetCardTopRow;
