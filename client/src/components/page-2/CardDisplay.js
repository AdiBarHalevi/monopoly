import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {cardWindowState} from "../../atoms";

const CardDisplay = () => {
  const [card, setCardWindow] = useRecoilState(cardWindowState);

  if (card.length > 2&&!card.displayImage){
    return (
      <Container>
        <AreaColor cardColor={card[0]}></AreaColor>
        <CardDetails>{card[1]}</CardDetails>
        <Price>{`$${card[2]}`}</Price>
      </Container>
    );}
  else return <PicContainer picture={card[0]} />;
};

export default CardDisplay;

const Container = styled.div`
  border: 1px solid black;
  height: 12rem;
  width: 12rem;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AreaColor = styled.div`
  background: ${(props) => props.cardColor};
  height: 3rem;
`;

const CardDetails = styled.div`
  height: 3rem;
  text-align: center;
  line-height: 3;
`;

const Price = styled.div`
  text-align: center;
  padding:1rem;
`;
const PicContainer = styled.div`
  background-image: url(${(props) => props.picture});
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  height: 12rem;
  width: 8rem;
`;
