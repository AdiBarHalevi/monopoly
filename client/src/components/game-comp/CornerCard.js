import React from "react";
import styled from "styled-components";

const CornerCard = (props) => {
    console.log("props.image")

  return <Container image={props.image}>
      {()=>console.log("a")}
  </Container>;
};

export default CornerCard;

const Container = styled.div`
&{
    height:7.5rem;
    width:7.5rem;
    background-image: url(${(props)=>props.image});
    background-position: center;
    background-size: cover;
    display: inline-block;
    border:1px solid black;
}
`;
