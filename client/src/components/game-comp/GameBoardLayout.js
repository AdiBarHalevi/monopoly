import React, { useEffect, useState } from "react";
import { FlexBox } from "../common-components/FlexBox";
import { getGameBoard } from "../../axioscall";
import { gameboardData, renderState } from "../../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";

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
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);
  const [renderGlobalState, setrenderState] = useRecoilState(renderState);
  const [layoutDataState, setlayoutDataState] = useState([]);

  // process the data from the API call
  const processData = (data) => {
    const processForGlobalVar = {};
    const lowerRow = {};
    const leftColumn = {};
    const topRow = {};
    const rightColumn = {};
    data.forEach((singleCard) => {
      if (singleCard.fieldNum < 11) {
        lowerRow[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum] = singleCard;
      }
      if (singleCard.fieldNum >= 11 && singleCard.fieldNum <= 19) {
        leftColumn[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum] = singleCard;
      }

      if (singleCard.fieldNum >= 20 && singleCard.fieldNum <= 30) {
        topRow[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum] = singleCard;
      }
      if (singleCard.fieldNum > 30) {
        rightColumn[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum] = singleCard;
      }
    });
    setlayoutDataState([lowerRow, leftColumn, topRow, rightColumn]);
    setgameboardData(processForGlobalVar);
  };

  useEffect(() => {
    getGameBoard(processData);
    setrenderState(false);
    console.log("gameBoard renders");
  }, [renderGlobalState]);

  return (
    <BoardContainer>
      {layoutDataState.length > 0 && (
        <FlexBox alignItems="center" flexDirection="column">
          <FlexBox>
            {Object.keys(layoutDataState[2]).map((blocknumber) => {
              if (blocknumber === `20` || blocknumber === `30`) {
                return (
                  <CornerCard
                    rowItems={layoutDataState[2][blocknumber]}
                    key={blocknumber}
                  />
                );
              }
              return (
                <AssetCardTopRow
                  rowItems={layoutDataState[2][blocknumber]}
                  key={blocknumber}
                />
              );
            })}
          </FlexBox>

          <FlexBox>
            <FlexBox flexDirection="column-reverse">
              {Object.keys(layoutDataState[1]).map((blocknumber) => {
                return (
                  <AssetCardLeftColumn
                    rowItems={layoutDataState[1][blocknumber]}
                    key={blocknumber}
                  />
                );
              })}
            </FlexBox>
            <ChanceAndCommunityChest assetHeight="6rem" assetWidth="8rem" />
            <FlexBox flexDirection="column">
              {Object.keys(layoutDataState[3]).map((blocknumber) => (
                <AssetCardRightColumn
                  rowItems={layoutDataState[3][blocknumber]}
                  key={blocknumber}
                />
              ))}
            </FlexBox>
          </FlexBox>
          <FlexBox flexDirection="row-reverse">
            {Object.keys(layoutDataState[0]).map((blocknumber) => {
              if (blocknumber === `0` || blocknumber === `10`)
                return (
                  <CornerCard
                    rowItems={layoutDataState[0][blocknumber]}
                    flexDirection="row-reverse"
                    key={blocknumber}
                  />
                );
              return (
                <AssetCardButtomRow
                  rowItems={layoutDataState[0][blocknumber]}
                  key={blocknumber}
                />
              );
            })}
          </FlexBox>
        </FlexBox>
      )}
    </BoardContainer>
  );
};

export default GameBoardLayout;

const BoardContainer = styled.div`
  border: 5px solid #1c2e4a;
  @media (max-width: 750px) {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: none;
  }
`;
