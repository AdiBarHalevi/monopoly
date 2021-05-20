import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
  const setCardWindow = useSetRecoilState(cardWindowState);
  const playersDataState = useRecoilValue(GamePlayDataState);

  const {
    // cardDetails,
    fieldNum,
    headerColor,
    name,
    // price,
    displayImage,
    // originalImage,
    // forSale,
    // avatar,
    isActive,
    // property,
  } = data.rowItems;

  const handleHover = () => {
    if (displayImage) return setCardWindow([data]);
    setCardWindow([data]);
  };

  const validateActiveAsset = () => {
    if (isActive) {
      return "#d7e6d5";
    } else return "#d7e622";
  };

  const playerAvatar = playersDataState
    .filter((player) => player.currentLocation === fieldNum)
    .map((player) => <Avatar key={player.name} avatar={player.avatar} />);

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
          backgroundColor="white"
        >
        <OwnerAvatar avatar={playersDataState[data.rowItems.property[0].ownedby - 1].avatar } />
          {playerAvatar}
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
          {playerAvatar}{" "}
          
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
        >
          <OwnerAvatar
            avatar={
              playersDataState[data.rowItems.property[0].ownedby - 1].avatar
            }
          />
        </Header>
        {playerAvatar}
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
        {playerAvatar}
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
  background: ${(props) => props.headerColor};
  width: ${(props) => props.headerWidth};
  height: ${(props) => props.headerheight};
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Container2 = styled.div`
  height: ${(props) => props.assetHeight};
  width: ${(props) => props.assetWidth};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  

  @media (max-height: 799px) and(max-width:1200) {
    height: 2.5rem;
    width: 2.5rem;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    position: relative;
    display: inline-block;
    border: 1px solid black;
  }

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const OwnerAvatar = styled.div`
height: 20px;
width: 21px;
background-image: url(${(props) => props.avatar});
background-color: white;
background-position: center;
background-size: cover;

`