import React from "react";
import styled from "styled-components";
import chanceCardImage from "../../img/chanceCard.png";

const ChanceCard = () => {
  return <Container></Container>;
};

export default ChanceCard;

const Container = styled.div`
  width: 6rem;
  height: 4rem;
  background: yellow;
  align-self: flex-end;
  background-image: url(${chanceCardImage});
  background-position: center;
  background-size: cover;
  transform: rotate(230deg);
  border: 1px dotted;
`;
