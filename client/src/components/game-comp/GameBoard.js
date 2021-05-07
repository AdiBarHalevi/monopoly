import React from "react";
import PlayerTable from "../page-2/PlayerTable";
import GameManager from "../page-2/game-managment/GameManager";
import GameBoardLayout from "./GameBoardLayout";
import styled from "styled-components";

const GameBoard = () => {
  return (
    <PageContainer>
      <GameBoardLayout />
      <Container>
        <GameManager />
        <PlayerTable />
      </Container>
    </PageContainer>
  );
};

export default GameBoard;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  // width:95%
  width: 10rem;
  justify-content: space-around;
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
`;
