import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  activeUserData,
  gameCardsData,
  GamePlayDataState,
  shouldLayoutChange,
} from "../../../../../atoms";
import styled from "styled-components";
import {
  mortgageAnAssetAPI,
  updatedGameBoardData,
  retirePlayer,
} from "../../../../../axioscall";
import {
  processData,
  saveToPlayersState,
} from "../../../../../UtilityFunctions";

const SellAsset = (props) => {
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );
  const setShouldLayoutUpdateState = useSetRecoilState(shouldLayoutChange);
  const [gameboardDataState, setgameboardData] = useRecoilState(gameCardsData);
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const mortgageaAssets = async (asset) => {
    // give money to the player and change property activity (in the players state)
    const mortgageValue = asset.price * 0.6;
    let AssetUpdate;
    const updateAsset = activeUserDataState.property.map((card) => {
      if (card.fieldNum === asset.fieldNum) {
        const newCard = { ...card, isActive: false };
        AssetUpdate = newCard;
        return newCard;
      } else return card;
    });
    const updateUser = {
      ...activeUserDataState,
      balance: activeUserDataState.balance + mortgageValue,
      property: updateAsset,
    };
    setActiveUserDataState(updateUser);
    saveToPlayersState(updateUser, playersDataState, setPlayersDataState);

    const updateGameBoard = { ...gameboardDataState };
    updateGameBoard[asset.fieldNum] = AssetUpdate;
    setgameboardData(updateGameBoard);

    const userId = activeUserDataState._id;
    await mortgageAnAssetAPI(asset.fieldNum, userId, mortgageValue);
    const newBoard = await updatedGameBoardData();
    processData(newBoard.data, setgameboardData);

    setShouldLayoutUpdateState(true);
  };

  const bankrupcy = () => {
    retirePlayer(activeUserDataState._id);
    props.setSellAssetState(false);
    props.confirm();
  };

  if (activeUserDataState.property)
    return (
      <>
        Assets you can mortgage:
        <Container>
          {activeUserDataState.property.map((asset, i) => {
            if (gameboardDataState[asset.fieldNum][`isActive`])
              return (
                <CardShow key={i + 20}>
                  <CardHeader
                    color={gameboardDataState[asset.fieldNum][`headerColor`]}
                  ></CardHeader>
                  <h4>{gameboardDataState[asset.fieldNum][`name`]}</h4>
                  <div>
                    Assets to mortgage:{" "}
                    {
                      gameboardDataState[asset.fieldNum][`property`][0][
                        `Assets`
                      ]
                    }
                  </div>
                  <div>
                    mortgage value: $
                    {gameboardDataState[asset.fieldNum][`price`] * 0.6}
                  </div>
                  <Button onClick={() => mortgageaAssets(asset)}>
                    mortgage the asset
                  </Button>
                </CardShow>
              );
            else return <></>;
          })}
        </Container>
        <button onClick={bankrupcy}>declare bankrupcy</button>
      </>
    );
};

export default SellAsset;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const CardShow = styled.div`
  padding-buttom: 9px;
  font-size: 10px;
  width: 8rem;
  border: 1px solid;
  background: #d7e6d5;
`;

const CardHeader = styled.div`
  width: 100%;
  font-size: 10px;
  height: 0.8rem;
  background: ${(props) => props.color};
`;

const Button = styled.button`
  font-size: 10px;
`;
