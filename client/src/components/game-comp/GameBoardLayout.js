import React, { useState } from "react";
import { FlexBox } from "../common-components/FlexBox";
import axiosInstance from "../../axioscall";
import { gameboardData } from "../../atoms";
import { useRecoilState } from "recoil";

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
  const [layoutDataState,setlayoutDataState] = useState([])

  // process the data from the API call
  const processData = (data) => {
    const processForGlobalVar ={}
    const lowerRow = {};
    const leftColumn = {};
    const topRow = {};
    const rightColumn = {};
    data.forEach((singleCard) => {
      if (singleCard.fieldNum < 11) {
        lowerRow[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum]=singleCard
      }
      if (singleCard.fieldNum >= 11 && singleCard.fieldNum <= 19) {
        leftColumn[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum]=singleCard
      }

      if (singleCard.fieldNum >= 20 && singleCard.fieldNum <= 30) {
        topRow[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum]=singleCard
      }
      if (singleCard.fieldNum > 30) {
        rightColumn[singleCard.fieldNum] = singleCard;
        processForGlobalVar[singleCard.fieldNum]=singleCard
      }
    });
    setlayoutDataState([lowerRow, leftColumn, topRow, rightColumn])
    setgameboardData(processForGlobalVar);

  };

  // Call the API for the game board
  const sendreq = async () => {
    // i've blocked this option in order to have on game plate, later on this comment has to be removed
    // const req = await axiosInstance.post(`/gameAPI/gameCards`);
    const res = await axiosInstance.get(`/gameAPI/gameplay`);
    try {
      processData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={sendreq}>Click here</button>
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
    </div>
  );
};

export default GameBoardLayout;
