import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../atoms";

const PlayerTable = () => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  if (playersDataState.length > 1)
    return (
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
            {playersDataState.map((player, i) => {
              console.log(player.avatar)
              
              return (
                <tr key={i}>
                  <AvatarTd avatar={player.avatar}></AvatarTd>
                  <Td>{player.name}</Td>
                  <Td>{player.balance}</Td>
                  <Td>{player.currentLocation}</Td>
                </tr>
              );
            })}
          </tbody>
        </GameStatus>
      </>
    );
  else return <></>;
};

export default PlayerTable;

const GameStatus = styled.table`
  text-align: center;
  font-size: 12px;
`;

const Td = styled.td`
  background: pink;
  border: 1px solid;
  width: 6rem;
`;

const AvatarTd = styled.td`
  height:2rem;
  width:2rem;
  background-image: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
`
