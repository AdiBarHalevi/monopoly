import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../atoms";
import { postUser } from "../../axioscall";
import ironAvatar from "../../img/iron-avatar.png";
import hatAvatar from "../../img/hat-avatar.png";
import shoeAvatar from "../../img/shoe-avatar.png";
import carAvatar from "../../img/car_avatar.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import rainingMoney from "../../img/raining-money.gif"

const WelcomPage = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const [registrated, setregistrated] = useState([]);
  const textInput = useRef();

  const saveUser = () => {
    const add = registrated;
    add.push(textInput.current.value);
    setregistrated(add);
    console.log(registrated);
  };

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const startGame = () => {
    const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];
    shuffle(registrated).forEach((user, index) => {
      postUser(user, index + 1, avatars[index]);
    });
  };

  return (
    <WelcomePage  background={rainingMoney}>
      <>
      <WelcomeSign>
        <h1>Monopoly Full Stack Project</h1>
        <Signature>by Adi Bar Halevi</Signature>
        <Paragraph>
          this App is a mock of the game Monopoly. click{" "}
          <Link to="/explain" style={{ textDecoration: "none", color: "#88CCD9" }}>here</Link> to learn more about the building
          process or <Link to="/Register" style={{ textDecoration: "none", color: "#88CCD9" }}>Register</Link> a new game
        </Paragraph>
      </WelcomeSign>
      </>
    </WelcomePage>
  );
};

export default WelcomPage;

const WelcomePage = styled.div`
  color: #6d8d8a;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #345167;
  height: 92.5vh;
  position:relative;
  &:before{
    content:"";
    top:0;
    right:0;
    height:100%;
    width:100%;
    position:absolute;
    background-image: url(${(props) => props.background});
    opacity:0.05;
    background-position: center;
    background-size: cover;
  }
`;

const WelcomeSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:1;
`;
const Paragraph = styled.p`
  width: 18rem;
  text-align: center;
  z-index:1;
`;

const Signature = styled.p`
  font-family: Dancing Script, cursive;
  font-size: 32px;
  color: red;
`;
