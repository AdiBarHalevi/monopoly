import React from "react";
import styled from "styled-components";
import communityChestImage from "../../img/communitychest.jpg";

const CommunityChestCard = () => {
  return <Container></Container>;
};

export default CommunityChestCard;

const Container = styled.div`
  width: 6rem;
  height: 4rem;
  background: orange;
  transform: rotate(50deg);
  background-image: url(${communityChestImage});
  background-position: center;
  background-size: cover;
  border: 1px dotted;
`;
