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
import SignatureEffect from "./SignatureEffect"
import MonopolyIMG from "../../img/MonopolyIMG.png"

const WelcomPage = () => {
  return (
    <WelcomePage  background={rainingMoney}>
      <>
      <WelcomeSign>
         <h1>Monopoly Full Stack Project</h1>
         <MonopolyLogo background={MonopolyIMG}/> <SignatureEffect/>
        <Paragraph>
          this App is a mock of the game Monopoly.<br/> click{" "}
          <Link to="/explain" style={{ textDecoration: "none", color: "#88CCD9" }}>here</Link> to learn more about the building
          process<br/> or <Link to="/Register" style={{ textDecoration: "none", color: "#88CCD9" }}>Register</Link> a new game
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
  width: 29rem;
  text-align: center;
  z-index:1;
`;

const MonopolyLogo = styled.div`
    background-image: url(${(props) => props.background});
    height:3rem;
    width:10rem;
    background-position: center;
    background-size: cover;
    display:inline-block
`

