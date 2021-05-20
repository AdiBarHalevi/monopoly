import React from "react";
import styled from "styled-components";
import { AssetCardsContainer } from "../../../common-components/AssetCardsContainer";
import ChanceGif from "../../../../img/chanceGif.gif"

const LandedOnChance = (props) => {
  return (
    <AssetCardsContainer>
      <ChanceContainer image={ChanceGif}/>
      Landed on Chance
      <button onClick={props.confirm}>OK</button>
    </AssetCardsContainer>
  );
};

export default LandedOnChance;

const ChanceContainer = styled.div`
  background-image: url(${(props)=>props.image});
  background-position: center;
  background-size: cover;
  height:20rem;
  width:56%;
  margin-bottom:1rem;

`