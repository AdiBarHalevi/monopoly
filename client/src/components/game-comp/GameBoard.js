import React from "react";
import PlayerTable from "../page-2/PlayerTable";
import GameManager from "../page-2/game-managment/GameManager";
import GameBoardLayout from "./GameBoardLayout";
import styled from "styled-components";
import CardDisplay from "../page-2/card-display/CardDisplay";
import ResetButtonIMG from "../../img/resetButton.jpg";
import { FlexBox } from "../common-components/FlexBox";
import { Link, useHistory } from "react-router-dom";
import { ResetGameAPI } from "../../axioscall";

const GameBoard = () => {
  const history = useHistory();
  const resetGame = () => {
    if (
      window.confirm(
        "are you sure? this action will delete the game for all players"
      )
    ) {
      ResetGameAPI();
      history.push("/");
    }
  };

  return (
    <PageContainer>
      <GameBoardLayout />
      <Container>
        <ResetButtonDiv>
          <ResetLabel>reset the game </ResetLabel>

          <ResetButton reset={ResetButtonIMG} onClick={resetGame}></ResetButton>
        </ResetButtonDiv>
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
  height: 90%;
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
`;

const ResetButton = styled.button`
  background-image: url(${(props) => props.reset});
  background-position: center;
  background-size: cover;
  height: 3rem;
  width: 3rem;
  border-radius: 3rem;
  cursor: pointer;
  @media (max-width: 500px) {
    height: 2rem;
    width: 2rem;
  }
`;

const ResetButtonDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    position: absolute;
    top: 0.5rem;
    right: 52%;
    flex-direction: row;
  }
`;
const ResetLabel = styled.label`
  @media (max-width: 500px) {
    display: none;
  }
`;
