import React, { useRef, useState } from "react";
import { postUser,getaUserListFromApi} from "../axioscall";
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
  Container
} from "./common-components/registerPage-stylecomp";
import { Link } from "react-router-dom";

const Register = () => {
  const [registrated, setregistrated] = useState([]);
  const textInput = useRef();
  const [registrationErorState, setRegistrationErorState] = useState(false);
  const [isGameSaveAvailable,setIsGameSaveAvailable] = useState(true)


  const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];

  const saveUser = (userName) => {
    const avatars = [ironAvatar, carAvatar, shoeAvatar, hatAvatar];
    if (registrated.length === 4) return setRegistrationErorState(true);
    postUser(userName, registrated.length + 1, avatars[registrated.length]);
    setregistrated([...registrated, userName]);
  };

  const savedGamecheck = async ()=>{
    const ans = await getaUserListFromApi()
    if(ans.data.length>0) console.log(ans.data.length)
    else setIsGameSaveAvailable(false )
    console.log(ans.data.length)

  }


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
        <Container>
          {registrated.length < 4 && (
            <>
              <input
                type="text"
                ref={textInput}
                style={{
                  background: "white",
                  color: `#345167`,
                  display: "block",
                  width:"100%",
                  marginRight: "1rem"
                }}
                placeholder="regiter a new player"
              ></input>
  
              <br></br>
  
              <Button onClick={() => saveUser(textInput.current.value)}>
                Submit
              </Button>
            </>
          )}
          <Button onClick={savedGamecheck}> 
            Load  
          </Button>
          <Button>
            {" "}
            <Link to="/play" style={{ textDecoration: "none", color: `#f0fffe` }}>
              startGame{" "}
            </Link>
          </Button>
        </Container>
        {!isGameSaveAvailable&& 
          <>
            <p style={{ width: "80%",textAlign:"center",color:"red"}}> sorry your game is unavialable, please register a new game</p>
            <Button onClick={()=>{setIsGameSaveAvailable(true)}}> ok </Button>
          </>
          }
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

