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
  height: 15rem;
  width: 15rem;
  background: #d7e6d5;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  padding: 1rem;
`;
