import React from "react";
import styled from "styled-components";
import GameBoard from "../game-comp/GameBoard";

const Page2 = () => {
  return (
    <>
    <PageLayout>
    <GameBoard />
    </PageLayout>
    </>
  );
};

export default Page2;

const PageLayout = styled.div`
  // width;100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
