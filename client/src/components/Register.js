import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../atoms";
import { postUser } from "../axioscall";
import ironAvatar from "../img/iron-avatar.png";
import hatAvatar from "../img/hat-avatar.png";
import shoeAvatar from "../img/shoe-avatar.png";
import carAvatar from "../img/car_avatar.png";
import styled from "styled-components";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

const Register = () => {
  const [playersDataState, setPlayersDataState] =
    useRecoilState(GamePlayDataState);
  const [registrated, setregistrated] = useState([]);
  const textInput = useRef();
  const [registrationErorState, setRegistrationErorState] = useState(false)

  const saveUser = (userName) =>{ 
    if(registrated.length === 4) return setRegistrationErorState(true)
    setregistrated([...registrated, userName]);}
  
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const startGame = () => {
    const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];
    shuffle(registrated).forEach((user, index) => {
      postUser(user, index + 1, avatars[index]);
    });
  };

  if(registrationErorState){
      return(
          <ErrorMsg>
              the maximum amount of players can be only 4
              <button onClick={()=>setRegistrationErorState(false)}> Confirm</button>
          </ErrorMsg>
      )
  }
  return (
    <RegisterPage>
        <div>Register players for the game</div>
      <div>
        <input type="text" ref={textInput}></input>
        <button onClick={() => saveUser(textInput.current.value)}>Submit</button>
        <button onClick={startGame}>
          {" "}
          <Link to="/play">startGame </Link>
        </button>
      </div>
      <div>
        registrated players:
        <PlayerTable>
            <tbody>
        {registrated.map((player,i)=>{
            return(
            <tr key={i}>
                <th>
                    {i+1}
                </th>
                <td>
                    {player}
                </td>
            </tr>)
        })}
            </tbody>
        </PlayerTable>
      </div>
    </RegisterPage>
  );
};

export default Register;

const ErrorMsg = styled.div`
    height:100%;
    background:blue;
    width:100%

`

const PlayerTable = styled.table`
    border:1px solid black;
    background: purple;
`

const RegisterPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:center;
  height:90vh;
`;