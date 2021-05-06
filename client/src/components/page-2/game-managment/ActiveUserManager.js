import React, { useState } from "react";
import { getRandomInt } from "../../../UtilityFunctions";
import { useRecoilState } from "recoil";
import { gameboardData } from "../../../atoms";
import ActionBox from "./actions-components/ActionBox";

const ActiveUserManager = (props) => {
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);
  const [inTurnLocationState, setinTurnLocationState] = useState({});
  const [diceState, setdiceState] = useState([0, 0, 0, true]);
  const [boxState, setBoxState] = useState(["none", false]);

  const [activeUserState, setActiveUserState] = useState({});

  const rollDice = () => {
    setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), diceState[2], false]);
    updateLocation();
    turnEffect();
    props.saveChanges(activeUserState);
  };

  // updates the user's location and saves it on its state
  const updateLocation = () => {
    const update = { ...activeUserState };
    if (update[`currentLocation`] + diceState[1] + diceState[0] < 40)
      update[`currentLocation`] += diceState[1] + diceState[0];
    else
      update[`currentLocation`] =
        diceState[1] + diceState[0] + update[`currentLocation`] - 40;
    setActiveUserState(update);
  };

  // finishes the turn with click of a button saves the next user as active, resets the dice state and saves changes
  const finishTurn = () => {
    props.endTurn(activeUserState);
    props.saveChanges(activeUserState);
    setdiceState([diceState[0], diceState[1], diceState[2], true]);
    setActiveUserState(props.activeUser);
    setBoxState(["show", false]);
  };

  // holds the function of the turn decides if the user can buy or has to pay rent
  const turnEffect = () => {
    loadLocationCard();
  };


  const boxStateChange = () => {
    setBoxState(["flex", false]);
  };

  const loadLocationCard = () => {
    if (activeUserState.currentLocation) {
      let currentLocationData = {};
      gameboardDataState.find((rowOrColumn) => {
        const ans = Object.values(rowOrColumn).find((singleAsset) => {
          return singleAsset.fieldNum === activeUserState.currentLocation;
        });
        currentLocationData = ans;
        return ans;
      });
      setinTurnLocationState(currentLocationData);
    }
  };

  return (
    <>
      <ActionBox
        setActiveUserState={setActiveUserState}
        activeUserState={activeUserState}
        inTurnLocationState={inTurnLocationState}
        setinTurnLocationState={setinTurnLocationState}
        boxState={boxState}
        setBoxState={setBoxState}
      />
      <div>
        <table>
          <tbody>
            <tr>
              <th>users turn</th>
              <td>{activeUserState.name}</td>
            </tr>
            <tr>
              <th>currentLocation</th>

              <td>
                {activeUserState.currentLocation
                  ? activeUserState.currentLocation
                  : ""}
              </td>
            </tr>
            <tr>
              <th>Dice score</th>
              <td>{diceState[0]}</td>
              <td>{diceState[1]}</td>
            </tr>
          </tbody>
        </table>
        {diceState[3] && <button onClick={rollDice}>Roll Dice</button>}
        <button onClick={finishTurn}>End turn</button>
      </div>
    </>
  );
};

export default ActiveUserManager;
