import React from "react";
import styled from "styled-components";
import {useRecoilState} from "recoil"
import cardWindowState from "../../../../atoms"

const SpecialSquare = ({ image, assetHeight, assetWidth, headerDirection }) => {
  const[card,setCardWindow] = useRecoilState(cardWindowState)

  const handleHover =()=>{
    setCardWindow([image])
  }


  return (
    <Container
      onMouseEnter={handleHover}
      assetHeight={assetHeight}
      assetWidth={assetWidth}
      headerDirection={headerDirection}
      image={image}
    ></Container>
  );
};

export default SpecialSquare;

const Container = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  display: inline-block;
  border: 1px solid black;
`;
