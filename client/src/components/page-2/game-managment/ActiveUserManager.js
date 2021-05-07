import React, { useEffect, useState } from "react";
import { getRandomInt } from "../../../UtilityFunctions";
import { useRecoilState } from "recoil";
import {
  gameboardData,
  GamePlayDataState,
  activeUserData,
} from "../../../atoms";


import ActionBox from "./actions-components/ActionBox";
import LandedOnStart from "./actions-components/LandedOnStart";
import { saveToPlayersState } from "../../../UtilityFunctions";
import StartTurn from "./StartTurn";

const ActiveUserManager = (props) => {
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );
  const [inTurnLocationState, setinTurnLocationState] = useState({});
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const [diceState, setdiceState] = useState([0, 0, "start-turn"]);
  const [boxState, setBoxState] = useState(["flex", true]);
  const [startBlockState, setStartBoxState] = useState(false);
  // const [activeUserState, setActiveUserState] = useState({});

  const rollDice = async () => {
    setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), "end-turn"]);
    updateLocation();
    saveToPlayersState(
      activeUserDataState,
      playersDataState,
      setPlayersDataState
    );
    props.saveChanges(activeUserDataState);
    setBoxState(["flex", true]);
  };

  // updates the user's location and saves it on its state
  const updateLocation = () => {
    const update = { ...activeUserDataState };
    let newLocation = update[`currentLocation`] + diceState[1] + diceState[0];
    if (newLocation < 40) {
      update[`currentLocation`] = newLocation;
    } else {
      update[`currentLocation`] = newLocation - 40;
      setStartBoxState(true);
    }
    setActiveUserDataState(update);
    saveToPlayersState(
      activeUserDataState,
      playersDataState,
      setPlayersDataState
    );
  };

  // finishes the turn with click of a button saves the next user as active, resets the dice state and saves changes
  const finishTurn = () => {
    saveToPlayersState(
      activeUserDataState,
      playersDataState,
      setPlayersDataState
    );
    props.endTurn();
    props.saveChanges();
    setdiceState([diceState[0], diceState[1], "start-turn"]);
    setBoxState(["flex", false]);
  };

  const loadLocationCard = () => {
    if (activeUserDataState.currentLocation) {
      setinTurnLocationState(
        gameboardDataState[activeUserDataState.currentLocation]
      );
      console.log(inTurnLocationState);
    }
  };

  // useEffect(()=>{
  //   loadLocationCard()
  //   console.log(inTurnLocationState)
  // })

  if (startBlockState)
    return (
      <LandedOnStart
        setActiveUserState={setActiveUserDataState}
        setBoxState={setBoxState}
        boxState={boxState}
        setStartBoxState={setStartBoxState}
        activeUserState={activeUserDataState}
        gameboardDataState={gameboardDataState}
        setgameboardData={setgameboardData}
      />
    );
  return (
    <>
      <div>
        {diceState[2] === "start-turn" && (
          <StartTurn
            setBoxState={setBoxState}
            boxState={boxState}
            diceState={diceState}
            setdiceState={setdiceState}
            loadLocationCard={loadLocationCard}
          />
        )}
        {diceState[2] === "roll-dice" && (
          <>
            <button onClick={rollDice}>Roll Dice</button>
            <button onClick={() => console.log("action")}>
              make an action
            </button>
          </>
        )}
        {diceState[2] === "end-turn" && (
          <>
            <ActionBox
              setActiveUserState={setActiveUserDataState}
              activeUserState={activeUserDataState}
              inTurnLocationState={inTurnLocationState}
              setinTurnLocationState={setinTurnLocationState}
              boxState={boxState}
              setBoxState={setBoxState}
            />
            <button onClick={finishTurn}>end turn</button>
          </>
        )}
      </div>
    </>
  );
};

export default ActiveUserManager;

{
  /* <table>
          <tbody>
            <tr>
              <th>users turn</th>
              <td>{activeUserDataState.name}</td>
            </tr>
            <tr>
              <th>currentLocation</th>

              <td>
                {activeUserDataState.currentLocation
                  ? activeUserDataState.currentLocation
                  : ""}
              </td>
            </tr>
            <tr>
              <th>Dice score</th>
              <td>{diceState[0]}</td>
              <td>{diceState[1]}</td>
            </tr>
          </tbody>
        </table> */
}
