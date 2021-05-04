import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../../atoms";
import styled from "styled-components";
import PlayerManager from "./PlayerManager";
import ActiveUserManager from "./ActiveUserManager";
import { getRandomInt } from "../../../UtilityFunctions";

const GameManager = () => {
  const [activePlayerState, setActivePlayerState] = useState({});
  const [diceState, setdiceState] = useState([0, 0, 0, true]);
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const saveToGlobalUserData = () => {
    const update = [];
    playersDataState.forEach((player) => {
      if (player.name === activePlayerState.name) {
        const newPlayerStatus = {
          ...player,
        };
        newPlayerStatus[`playerLocation`] = activePlayerState.playerLocation;
        update.push(newPlayerStatus);
      } else update.push(player);
    });
    setPlayersDataState(update);
  };

  // finishes the players Turn and sets the Active user to the next player
  const endTurn = () => {
    saveToGlobalUserData();
    let whosturn = diceState[2];
    whosturn++;
    if (whosturn < playersDataState.length) {
      const activeUser = playersDataState[whosturn];
      setdiceState([diceState[0], diceState[1], whosturn, true]);
      setActivePlayerState(activeUser);
    } else {
      whosturn = 0;
      const activeUser = playersDataState[0];
      setdiceState([diceState[0], diceState[1], whosturn, true]);
      setActivePlayerState(activeUser);
    }
  };

  // genereate Dice roll (keeps the players turn)
  const rollDice = () => {
    setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), diceState[2], false]);

    // set changes on the Active User State
    const update = { ...activePlayerState };
    if (update[`playerLocation`] + (diceState[0] + diceState[1]) >= 40)
      update[`playerLocation`] += diceState[0] + diceState[1] - 40;
    else update[`playerLocation`] += diceState[0] + diceState[1];

    setActivePlayerState(update);
  };

  useEffect(() => {
    setActivePlayerState(playersDataState[diceState[2]]);
  }, [playersDataState]);

  if (activePlayerState) {
    return (
      <>
        <PlayerManager />
        <TurnTable>
          <tbody>
            <tr>
              <th>Player's Turn</th>
              <td>{activePlayerState.name}</td>
            </tr>
            <tr>
              <th>Current Location</th>
              <td>{activePlayerState.playerLocation}</td>
            </tr>
          </tbody>
        </TurnTable>
        <ActiveUserManager
          endTurn={endTurn}
          rollDice={rollDice}
          diceState={diceState}
        />
      </>
    );
  }
};

export default GameManager;

const TurnTable = styled.table`
  width: 18rem;
  text-align: left;
`;
