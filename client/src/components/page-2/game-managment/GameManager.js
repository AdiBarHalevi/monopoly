import React, { useState } from "react";

import styled from "styled-components";
import PlayerManager from "./PlayerManager"


const GameManager = () => {

  const [dice,setDice] = useState([0,0])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const RollDice =()=> setDice([getRandomInt(1,7),getRandomInt(1,7)])
  
  
  
  return (
    <TurnTable>
      <PlayerManager/>

      <tr>
        <th>Player's Turn</th>
        <td>Adi</td>
      </tr>
      <tr>
        <th>Current Location</th>
        <td>0</td>
      </tr>
      <tr>
        <td><button onClick={RollDice}>Roll Dice</button></td>
        <td><span>dice result</span> <span>{dice[0]+dice[1]}</span></td>
        
      </tr>
  </TurnTable>
  );
};

export default GameManager;

const TurnTable = styled.table`
  width:18rem;
  text-align:left;
`;
