import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../atoms";
import { postUser } from "../axioscall";
import ironAvatar from "../img/iron-avatar.png";
import hatAvatar from "../img/hat-avatar.png";
import shoeAvatar from "../img/shoe-avatar.png";
import carAvatar from "../img/car_avatar.png";
import {
  Td,
  Tr,
  ErrorMsg,
  Button,
  PlayerTable,
  RegisterPage,
  Avatar,
} from "./common-components/registerPage-stylecomp";
import { Link } from "react-router-dom";

const Register = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const [registrated, setregistrated] = useState([]);
  const textInput = useRef();
  const [registrationErorState, setRegistrationErorState] = useState(false);

  const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];

  const saveUser = (userName) => {
    if (registrated.length === 4) return setRegistrationErorState(true);
    setregistrated([...registrated, userName]);
  };

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const startGame = () => {
    const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];
    shuffle(registrated).forEach((user, index) => {
      postUser(user, index + 1, avatars[index]);
    });
  };

  if (registrationErorState) {
    return (
      <ErrorMsg>
        the maximum amount of players can be only 4
        <button onClick={() => setRegistrationErorState(false)}>
          {" "}
          Confirm
        </button>
      </ErrorMsg>
    );
  }
  return (
    <RegisterPage>
      <div>Register players for the game</div>
      <div>
        {registrated.length < 4 && (
          <>
            <input
              type="text"
              ref={textInput}
              style={{
                background: "white",
                color: `#345167`,
                display: "block",
              }}
            ></input>

            <br></br>

            <Button onClick={() => saveUser(textInput.current.value)}>
              Submit
            </Button>
          </>
        )}
        <Button onClick={startGame} style={{ marginLeft: "2rem" }}>
          {" "}
          <Link to="/play" style={{ textDecoration: "none", color: `#345167` }}>
            startGame{" "}
          </Link>
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        registrated players:
        <PlayerTable>
          <tbody>
            {registrated.map((player, i) => {
              return (
                <Tr key={i}>
                  <Td>{i + 1}</Td>
                  <Td>{player}</Td>
                  <Avatar avatar={avatars[i]}></Avatar>
                </Tr>
              );
            })}
          </tbody>
        </PlayerTable>
      </div>
    </RegisterPage>
  );
};

export default Register;
