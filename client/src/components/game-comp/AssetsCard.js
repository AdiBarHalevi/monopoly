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
    headerColor}) => {


      return (


    <Container assetHeight={assetHeight} assetWidth={assetWidth} headerDirection={headerDirection}>
        <Header
         headerheight={headerheight}
         headerWidth={headerWidth}
         headerRotation={headerRotation}
         abosoluteTopPosition={abosoluteTopPosition}
         abosoluteLeftPosition={abosoluteLeftPosition}
         headerColor={headerColor}>
        </Header>
    </Container>
  );
};

export default AssetCard;

const Container = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background: #D7E6D5;
  display: flex;
  flex-direction: ${(props)=>props.headerDirection};
  border: 1px solid black;
  justify-content: end;
  align-items: center;
`;

const Header = styled.div`
  &{background:${(props)=>props.headerColor};
  width: ${(props) => props.headerWidth};
  height:${(props) => props.headerheight};
  position:relative;
  
  }
  &:after{
      content:"";
      transform:${(props)=>props.headerRotation};
      position: absolute;
      top:${(props)=>props.abosoluteTopPosition};
      left:${(props)=>props.abosoluteLeftPosition};
      font-size:12px;
  }

  }
`;
