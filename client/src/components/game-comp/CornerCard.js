import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cardWindowState } from "../../atoms";
import Avatar from "../common-components/AvatarDiv";

const CornerCard = (props) => {
  const [card, setCardWindow] = useRecoilState(cardWindowState);

  const handleHover = () => {
    setCardWindow([props.rowItems.originalImage]);
    console.log(card);
  };

  return (
    <Container image={props.rowItems.displayImage} onMouseEnter={handleHover}>
      <Avatar avatar={props.rowItems.avatar} />
    </Container>
  );
};

export default CornerCard;

const Container = styled.div`
  & {
    height: 4rem;
    width: 6rem;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    display: inline-block;
    border: 1px solid black;

    @media(max-height:799px)and(max-width:1200){
      height:2.5rem;
      width:2.5rem;
    }

    @media (max-width: 768px) {
      width:1.5rem;
      height:1.5rem;
    }
  }
`;
