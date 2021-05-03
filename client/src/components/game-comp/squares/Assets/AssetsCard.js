import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {cardWindowState} from "../../../../atoms";

const AssetCard = ({
  assetHeight,
  assetWidth,
  headerheight,
  headerWidth,
  headerDirection,
  headerRotation,
  abosoluteTopPosition,
  abosoluteLeftPosition,
  data,
}) => {
  const [card, setCardWindow] = useRecoilState(cardWindowState);

  const {
    cardDetails,
    fieldNum,
    headerColor,
    name,
    price,
    displayImage,
    originalImage
  } = data.rowItems;

  const handleHover =()=>{
    console.log(cardDetails,fieldNum,card)
    if(displayImage) return setCardWindow([originalImage])
    setCardWindow([headerColor,name,price])
  }

  if (displayImage) {
    return (
      <Container2
        onMouseEnter={handleHover}
        assetHeight={assetHeight}
        assetWidth={assetWidth}
        headerDirection={headerDirection}
        image={displayImage}
      ></Container2>
    );
  }
  return (
    <Container
      onMouseOver={handleHover}
      assetHeight={assetHeight}
      assetWidth={assetWidth}
      headerDirection={headerDirection}
    >
      <Header
        headerheight={headerheight}
        headerWidth={headerWidth}
        headerRotation={headerRotation}
        abosoluteTopPosition={abosoluteTopPosition}
        abosoluteLeftPosition={abosoluteLeftPosition}
        headerColor={headerColor}
        name={name}
      ></Header>
    </Container>
  );
};

export default AssetCard;

const Container = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background: #d7e6d5;
  display: flex;
  flex-direction: ${(props) => props.headerDirection};
  border: 1px solid black;
  justify-content: end;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.div`
  &{
  background:${(props) => props.headerColor};
  width: ${(props) => props.headerWidth};
  height:${(props) => props.headerheight};
  position:relative;
  
  }
  &:after{
      content:"${(props) => props.name}";
      transform:${(props) => props.headerRotation};
      position: absolute;
      top:${(props) => props.abosoluteTopPosition};
      left:${(props) => props.abosoluteLeftPosition};
      font-size: 5.5px;
      width: 26px;
      text-align: center;
    
    }
  }
`;

const Container2 = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  display: inline-block;
  border: 1px solid black;
`;
