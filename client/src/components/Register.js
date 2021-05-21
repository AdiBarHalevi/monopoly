import React, { useRef, useState } from "react";
import { postUser, getaUserListFromApi, ResetGameAPI } from "../axioscall";
import ironAvatar from "../img/iron-avatar.png";
import rainingMoney from "../img/raining-money.gif";
import hatAvatar from "../img/hat-avatar.png";
import shoeAvatar from "../img/shoe-avatar.png";
import carAvatar from "../img/car_avatar.png";
import {
  Td,
  Tr,
  Button,
  PlayerTable,
  RegisterPage,
  Avatar,
  Container,
} from "./common-components/registerPage-stylecomp";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [registrated, setregistrated] = useState([]);
  const textInput = useRef();
  const [isGameSaveAvailable, setIsGameSaveAvailable] = useState(true);
  const [isGameIsNew, setIsGameIsNew] = useState(false);
  const [isGameSet, setIsGameIsSet] = useState(false);
  const [isUserNameValid , setIsUserNameValid] = useState(true)
  const history = useHistory();

  const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];

  const saveUser = (userName) => {
    const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];
    if (registrated.indexOf(userName) >= 0) return setIsUserNameValid(false)
    if (registrated.length >= 1) setIsGameIsSet(true);
    postUser(userName, registrated.length + 1, avatars[registrated.length]);
    setregistrated([...registrated, userName]);
  };

  const savedGamecheck = async () => {
    const ans = await getaUserListFromApi();
    if (ans.data.length > 0) history.push("/play");
    else setIsGameSaveAvailable(false);
  };

  const startAnewGame = () => {
    ResetGameAPI();
    setIsGameIsNew(true);
  };

  return (
    <RegisterPage background={rainingMoney}>
      <div>Register players for the game</div>
      <Container>
        {registrated.length < 4 && isGameIsNew && (
          <>
            <input
              type="text"
              ref={textInput}
              style={{
                background: "white",
                color: `#345167`,
                display: "block",
                width: "100%",
                marginRight: "1rem",
              }}
              placeholder="regiter a new player"
            ></input>

            <br></br>
            {!isUserNameValid&&
              <div> 
                sorry this name is already taken
                  <Button onClick={() => setIsUserNameValid(true)}>
                  Ok
                </Button>
                
              </div>
            
            }
            {
              isUserNameValid&&
              <Button onClick={() => saveUser(textInput.current.value)}>
                Submit
              </Button>
            }
          </>
        )}
        {!isGameIsNew && (
          <>
            <Button onClick={savedGamecheck}>Load</Button>
            <Button onClick={startAnewGame}>start a new game</Button>
          </>
        )}
        {isGameSet && (
          <Button>
            {" "}
            <Link
              to="/play"
              style={{ textDecoration: "none", color: `#f0fffe` }}
            >
              startGame{" "}
            </Link>
          </Button>
        )}
      </Container>
      {!isGameSaveAvailable && !isGameIsNew && (
        <>
          <p style={{ width: "80%", textAlign: "center", color: "red" }}>
            {" "}
            sorry your game is unavialable, please register a new game
          </p>
          <Button
            onClick={() => {
              setIsGameSaveAvailable(true);
            }}
          >
            {" "}
            ok{" "}
          </Button>
        </>
      )}
      <div style={{ textAlign: "center" }}>
        registered players:
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
