import React, { useEffect, useState } from "react";
import axiosInstance from "../../axioscall";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../atoms";

const PlayerTable = () => {
  const [playersState, setplayersState] = useState([]);
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  useEffect(() => {
    setplayersState(playersDataState);
  }, [playersDataState]);

  if (playersState)
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
            {playersState.map((player, i) => {
              return (
                <tr key={i}>
                  <Td>{player.playersTurnNumber}</Td>
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
