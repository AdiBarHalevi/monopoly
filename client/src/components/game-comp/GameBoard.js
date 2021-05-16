import React from "react";
import PlayerTable from "../page-2/PlayerTable";
import GameManager from "../page-2/game-managment/GameManager";
import GameBoardLayout from "./GameBoardLayout";
import styled from "styled-components";
import CardDisplay from "../page-2/card-display/CardDisplay";

const GameBoard = () => {
  return (
    <PageContainer>
      <GameBoardLayout />
      <Container>
        <CardDisplay />
        <PlayerTable />
        <GameManager />
      </Container>
    </PageContainer>
  );
};

export default GameBoard;

const Container = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: 1rem solid black;
  width: 10rem;
  margin-left: 15px;
  justify-content: space-around;
  align-self: flex-end;
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
`;
