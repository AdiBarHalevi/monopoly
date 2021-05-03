import React from "react";
import { useRecoilState } from "recoil";
import {GamePlayDataState} from "../../atoms"
import styled from "styled-components";



const PlayerTable = () => {
  const [playersDataState, setPlayersDataState]= useRecoilState(GamePlayDataState)

  if(playersDataState) return (
    <>
      <GameStatus>
        <thead>
          <tr>
            <Td>player</Td>
            <Td> Name </Td>
            <Td> Balance </Td>
            <Td> Location </Td>
          </tr>
        </thead>
        <tbody>
          {
          playersDataState.map((player,i)=>{
            return(
            <tr key={i}>
              <Td>{player.turnNum}</Td>
              <Td>{player.name}</Td>
              <Td>{player.balance}</Td>
              <Td>{player.playerLocation}</Td>
            </tr>)
          })}
        </tbody>
      </GameStatus>
    </>
  );
};

export default PlayerTable;

const GameStatus = styled.table`
  text-align:center;
  font-size:12px;
`;

const Td = styled.td`
  background:pink;
  border:1px solid;
  width:6rem
`