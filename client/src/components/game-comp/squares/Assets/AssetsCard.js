import React from "react";
import styled from "styled-components";

const AssetCard = ({
  assetHeight,
  assetWidth,
  headerheight,
  headerWidth,
  headerDirection,
  headerRotation,
  abosoluteTopPosition,
  abosoluteLeftPosition,
  headerColor,
  headerTitle,
}) => {
  return (
    <Container
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
        headerTitle={headerTitle}
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
`;

const Header = styled.div`
  &{background:${(props) => props.headerColor};
  width: ${(props) => props.headerWidth};
  height:${(props) => props.headerheight};
  position:relative;
  
  }
  &:after{
      content:"${(props) => props.headerTitle}";
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
