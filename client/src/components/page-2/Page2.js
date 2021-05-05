import React from "react";
import styled from "styled-components";
import GameBoard from "../game-comp/GameBoard";

const Page2 = () => {
  return (
    <PageLayout>
      <GameBoard />
    </PageLayout>
  );
};

export default Page2;

const PageLayout = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
