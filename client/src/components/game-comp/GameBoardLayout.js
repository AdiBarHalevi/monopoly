import React, { useState } from "react";
import { FlexBox } from "../common-components/FlexBox";
import axiosInstance from "../../axioscall";

// assetes Column/Row Parent components
import AssetCardLeftColumn from "./squares/Assets/AssetCardLeftColumn";
import AssetCardRightColumn from "./squares/Assets/AssetCardRightColumn";
import AssetCardTopRow from "./squares/Assets/AssetCarrdTopRow";
import AssetCardButtomRow from "./squares/Assets/AssetsCardsButtomRow";

// Main Compomnents
import ChanceAndCommunityChest from "./ChanceAndCommunityChest";
import CornerCard from "./CornerCard";

const GameBoardLayout = () => {
  // boards layout's state
  const [boardData, setboardData] = useState([]);

  // process the data from the API call
  const processData = (data) => {
    const lowerRow = {};
    const leftColumn = {};
    const topRow = {};
    const rightColumn = {};
    data.forEach((singleCard) => {
      if (singleCard.fieldNum < 11) lowerRow[singleCard.fieldNum] = singleCard;
      if (singleCard.fieldNum >= 11 && singleCard.fieldNum <= 19)
        leftColumn[singleCard.fieldNum] = singleCard;
      if (singleCard.fieldNum >= 20 && singleCard.fieldNum <= 30)
        topRow[singleCard.fieldNum] = singleCard;
      if (singleCard.fieldNum > 30)
        rightColumn[singleCard.fieldNum] = singleCard;
    });
    setboardData([lowerRow, leftColumn, topRow, rightColumn]);
  };

  // Call the API for the game board
  const sendreq = async () => {
    const req = await axiosInstance.get(`/gameAPI/gameCards`);
    try {
      processData(req.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={sendreq}>Click here</button>

      {/* if board data holds the data from the API we will iterate over it and pull the data for each component depending on the serial number of the square */}
      {boardData.length > 0 && (
        <FlexBox alignItems="center" flexDirection="column">
          <FlexBox>
            {Object.keys(boardData[2]).map((blocknumber) => {
              if (blocknumber === `20` || blocknumber === `30`) {
                return (
                  <CornerCard
                    rowItems={boardData[2][blocknumber]}
                    key={blocknumber}
                  />
                );
              }
              return (
                <AssetCardTopRow
                  rowItems={boardData[2][blocknumber]}
                  key={blocknumber}
                />
              );
            })}
          </FlexBox>

          <FlexBox>
            <FlexBox flexDirection="column">
              {Object.keys(boardData[1]).map((blocknumber) => {
                return (
                  <AssetCardLeftColumn
                    rowItems={boardData[1][blocknumber]}
                    key={blocknumber}
                  />
                );
              })}
            </FlexBox>
            <ChanceAndCommunityChest assetHeight="6rem" assetWidth="8rem" />
            <FlexBox flexDirection="column">
              {Object.keys(boardData[3]).map((blocknumber) => (
                <AssetCardRightColumn
                  rowItems={boardData[3][blocknumber]}
                  key={blocknumber}
                />
              ))}
            </FlexBox>
          </FlexBox>
          <FlexBox flexDirection="row-reverse">
            {Object.keys(boardData[0]).map((blocknumber) => {
              if (blocknumber === `0` || blocknumber === `10`)
                return (
                  <CornerCard
                    rowItems={boardData[0][blocknumber]}
                    flexDirection="row-reverse"
                    key={blocknumber}
                  />
                );
              return (
                <AssetCardButtomRow
                  rowItems={boardData[0][blocknumber]}
                  key={blocknumber}
                />
              );
            })}
          </FlexBox>
        </FlexBox>
      )}
    </div>
  );
};

export default GameBoardLayout;
