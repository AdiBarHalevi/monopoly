import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../atoms";
import {postUser } from "../../axioscall";
import ironAvatar from "../../img/iron-avatar.png";
import hatAvatar from "../../img/hat-avatar.png";
import shoeAvatar from "../../img/shoe-avatar.png";
import carAvatar from "../../img/car_avatar.png";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";


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
    <WelcomePage>
      <WelcomeSign>
      <h1>Welcome to My final Project!</h1>
        <Paragraph>
          this App is a mock of the game Monopoly.
          click <Link to="/explain">here</Link> to learn more about the building process
          or <Link to="/Register">Register</Link>  a new game
        </Paragraph>
      </WelcomeSign>
    </WelcomePage>
  );
};

export default WelcomPage;


const WelcomePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:center;
  height:90vh;
`;

const WelcomeSign = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const Paragraph = styled.p`
  width:18rem;
  text-align:center;
`

