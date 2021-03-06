import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { GamePlayDataState } from "../../atoms";

const PlayerTable = () => {
  const playersDataState = useRecoilValue(GamePlayDataState);
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
  font-size: 8px;

  @media (max-width: 768px) {
    position: absolute;
    top: 4rem;
    left: 1rem;
  }
`;

const Td = styled.td`
  background: #345167;
  color: white;
  @media (max-width: 768px) {
    height: 30px;
    width: 15px;
    font-size: 8px;
    line-height: 1;
  }
`;

const AvatarTd = styled.td`
  height: 2rem;
  width: 2rem;
  background-image: url(${(props) => props.avatar});
  background-color: #345167;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    height: 30px;
    width: 15px;
  }
`;
