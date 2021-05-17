import React from "react";
import styled from "styled-components";
import GameBoard from "../game-comp/GameBoard";
import woodenFloor from "../../img/woodenFloor.png";

const Page2 = () => {
  return (
    <>
      <PageLayout background={woodenFloor}>
        <GameBoard />
      </PageLayout>
    </>
  );
};

export default Page2;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 140vh;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  @media (max-width: 750px) {
    height: 90vh;
  }
`;
