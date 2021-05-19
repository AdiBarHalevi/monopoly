import React from "react";
import PlayerTable from "../page-2/PlayerTable";
import GameManager from "../page-2/game-managment/GameManager";
import GameBoardLayout from "./GameBoardLayout";
import styled from "styled-components";
import CardDisplay from "../page-2/card-display/CardDisplay";
import ResetButtonIMG from "../../img/resetButton.jpg"
import {FlexBox} from "../common-components/FlexBox"
import { Link } from "react-router-dom";
import {ResetGameAPI} from "../../axioscall"



const GameBoard = () => {

  return (
    <PageContainer>
      
      <GameBoardLayout />
      <Container>
        <FlexBox flexDirection= "column" alignItems = "center">
        <label>reset the game </label>
        <Link to ="/" onClick={()=>ResetGameAPI()}>
          <ResetButton reset={ResetButtonIMG}>
          </ResetButton>
        </Link>
        </FlexBox>
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
    width:3rem;
    border-radius: 3rem;
    cursor: pointer;
`
