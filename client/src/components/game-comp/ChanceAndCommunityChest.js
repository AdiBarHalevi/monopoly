import React from "react";
import ChanceCard from "./ChanceCard";
import CommunityChestCard from "./CommunityChestCard";
import styled from "styled-components";

const ChanceAndCommunityChest = () => {
  return (
    <Container>
      <ChanceCard />
      <CommunityChestCard />
    </Container>
  );
};

export default ChanceAndCommunityChest;

const Container = styled.div`
  width: 36rem;
  background: #d7e6d5;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  padding: 1rem;

  @media (max-height: 799px) and(max-width:1200) {
    width: 21.61rem;
  }

  @media (max-width: 768px) {
    width: 12.6rem;
  }
`;
