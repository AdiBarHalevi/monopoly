import React from "react";
import styled from "styled-components";

const CornerCard = (props) => {

  return <Container image={props.image}></Container>;
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
