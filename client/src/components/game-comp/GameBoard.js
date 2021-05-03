import React from "react";
import CardDisplay from "../page-2/CardDisplay";
import PlayerTable from "../page-2/PlayerTable";
import GameManager from "../page-2/game-managment/GameManager"
import GameBoardLayout from "./GameBoardLayout";
import styled from "styled-components";

const GameBoard = () => {
  return (
    <>
      <GameBoardLayout />
      <Container>
        <GameManager/>
        <CardDisplay />
        <PlayerTable />
      </Container>
    </>
  );
};

export default GameBoard;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height:100%;
  justify-content:space-around;
`;

