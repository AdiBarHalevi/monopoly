import React from "react";
import styled from "styled-components";
import {useRecoilState} from "recoil"
import cardWindowState from "../../atoms"


const CornerCard = (props) => {

  const[card,setCardWindow] = useRecoilState(cardWindowState)

  const handleHover =()=>{
    setCardWindow([props.image])
  }

  return <Container image={props.image} onMouseEnter={handleHover}></Container>;
};

export default CornerCard;

const Container = styled.div`
  & {
    height: 3.5rem;
    width: 3.5rem;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    display: inline-block;
    border: 1px solid black;
  }
`;
