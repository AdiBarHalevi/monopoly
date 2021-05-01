import React from "react";
import styled from "styled-components";
import GameBoard from "../game-comp/GameBoard";

const GamePage = () => {
  return (
    <PageLayout>
      <GameBoard />
    </PageLayout>
  );
};

export default GamePage;


const PageLayout = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center
`