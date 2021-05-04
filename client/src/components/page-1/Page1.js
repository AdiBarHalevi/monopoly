import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../atoms";

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
    const usersData = [];
    shuffle(registrated).forEach((user, index) => {
      user = {
        name: user,
        balance: 1000,
        assets: [],
        active: true,
        turnNum: index + 1,
        playerLocation: 0,
      };
      usersData.push(user);
    });

    setPlayersDataState(usersData);
  };

  // useEffect(() => {
  //   console.log(`render`);
  // }, [registrated]);

  // const startGame =()=>{
  //   localStorage.setItem('users', users)
  // }
  return (
    <div className="welcome-page">
      <div>
        registrated players:
        {registrated.map((player, i) => {
          return <div key={i}>{player}</div>;
        })}
      </div>
      <table>
        <tbody>
          <tr>
            <th>Player's name</th>
            <td>
              <input type="text" ref={textInput}></input>
            </td>
            <td>
              <button onClick={saveUser}>Submit</button>
            </td>
            <td>
              <button onClick={startGame}>startGame</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WelcomPage;
