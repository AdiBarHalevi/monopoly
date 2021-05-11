import React from "react";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import styled from "styled-components";

const LandedOnChance = (props) => {
  return (
    <AssetCardsContainer>
      Landed on Chance
      <button onClick={props.confirm}>OK</button>
    </AssetCardsContainer>
  );
};

export default LandedOnChance;


const Avatar = styled.div`
height:2rem;
width:2rem;
background-image: url(${(props) => props.avatar});
background-position: center;
background-size: cover;

`
