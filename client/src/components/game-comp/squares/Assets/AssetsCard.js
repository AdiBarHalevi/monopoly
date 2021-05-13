import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cardWindowState, GamePlayDataState } from "../../../../atoms";
import Avatar from "../../../common-components/AvatarDiv";

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
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const {
    cardDetails,
    fieldNum,
    headerColor,
    name,
    price,
    displayImage,
    originalImage,
    forSale,
    avatar,
    isActive,
    property,
  } = data.rowItems;

  const handleHover = () => {
    console.log(isActive);
    // console.log(data.rowItems.property[0])
    // console.log(playersDataState[data.rowItems.property[0].ownedby-1].avatar)
    if (displayImage) return setCardWindow([data]);
    setCardWindow([data]);
  };
  const unUsed = () => {
    console.log(
      cardDetails,
      fieldNum,
      headerColor,
      name,
      price,
      displayImage,
      originalImage,
      forSale,
      card
    );
  };

  const validateActiveAsset = () => {
    if (isActive) {
      return "#d7e6d5";
    } else return "#d7e622";
  };

  const activityColor = validateActiveAsset();
  if (displayImage) {
    if (data.rowItems.property[0]) {
      return (
        <Container2
          onMouseEnter={handleHover}
          assetHeight={assetHeight}
          assetWidth={assetWidth}
          headerDirection={headerDirection}
          image={displayImage}
          ownerAvatar={
            playersDataState[data.rowItems.property[0].ownedby - 1].avatar
          }
          backgroundColor="white"
        >
          <Avatar avatar={avatar} />
        </Container2>
      );
    } else
      return (
        <Container2
          onMouseEnter={handleHover}
          assetHeight={assetHeight}
          assetWidth={assetWidth}
          headerDirection={headerDirection}
          image={displayImage}
          ownerAvatar=""
        >
          <Avatar avatar={avatar} />
        </Container2>
      );
  }

  if (playersDataState[data.rowItems.property[0].ownedby - 1])
    return (
      <Container
        onMouseOver={handleHover}
        assetHeight={assetHeight}
        assetWidth={assetWidth}
        headerDirection={headerDirection}
        activityColor={activityColor}
      >
        <Header
          headerheight={headerheight}
          headerWidth={headerWidth}
          headerRotation={headerRotation}
          abosoluteTopPosition={abosoluteTopPosition}
          abosoluteLeftPosition={abosoluteLeftPosition}
          headerColor={headerColor}
          name={name}
          ownerAvatar={
            playersDataState[data.rowItems.property[0].ownedby - 1].avatar
          }
          backgroundColor="white"
        ></Header>
        <Avatar avatar={avatar} />
      </Container>
    );
  else
    return (
      <Container
        onMouseOver={handleHover}
        assetHeight={assetHeight}
        assetWidth={assetWidth}
        headerDirection={headerDirection}
        activityColor={activityColor}
      >
        <Header
          headerheight={headerheight}
          headerWidth={headerWidth}
          headerRotation={headerRotation}
          abosoluteTopPosition={abosoluteTopPosition}
          abosoluteLeftPosition={abosoluteLeftPosition}
          headerColor={headerColor}
          name={name}
          ownerAvatar=""
          backgroundColor=""
        ></Header>
        <Avatar avatar={avatar} />
      </Container>
    );
};

export default AssetCard;

const Container = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background: ${(props) => props.activityColor};
  display: flex;
  flex-direction: ${(props) => props.headerDirection};
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (max-height: 880px) and(max-width:1600px) {
    height: 2.5rem;
    width: 2.5rem;
    background: ${(props) => props.activityColor};
    display: flex;
    flex-direction: ${(props) => props.headerDirection};
    border: 1px solid black;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
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
  &:before{
    content:"";
    background-image: url(${(props) => props.ownerAvatar});
    transform:${(props) => props.headerRotation};
    background-color:${(props) => props.backgroundColor};
    background-position: center;
    background-size: cover;
    width: 20px;
    height:15px;
    position:absolute;
    }

    @media(max-height:799px)and(max-width:1200px){
      &:after{
       content:""
      
      }

    }
  }
`;

const Container2 = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  position: relative;
  display: inline-block;
  border: 1px solid black;
  &:before {
    content: "";
    background-image: url(${(props) => props.ownerAvatar});
    transform: ${(props) => props.headerRotation};
    background-color: ${(props) => props.backgroundColor};
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 15px;
    position: absolute;
    right: 0;
  }

  @media (max-height: 799px) and(max-width:1200) {
    height: 2.5rem;
    width: 2.5rem;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    position: relative;
    display: inline-block;
    border: 1px solid black;
    &:before {
      content: "";
      background-image: url(${(props) => props.ownerAvatar});
      transform: ${(props) => props.headerRotation};
      background-color: ${(props) => props.backgroundColor};
      background-position: center;
      background-size: cover;
      width: 20px;
      height: 15px;
      position: absolute;
      right: 0;
    }
  }

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
