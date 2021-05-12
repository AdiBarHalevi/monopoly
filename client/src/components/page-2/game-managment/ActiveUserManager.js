import React, { useEffect, useState } from "react";
import { getRandomInt } from "../../../UtilityFunctions";
import { useRecoilState } from "recoil";
import {
  gameboardData,
  GamePlayDataState,
  activeUserData,
  renderState,
} from "../../../atoms";

import ActionBox from "./actions-components/ActionBox";
import LandedOnStart from "./actions-components/LandedOnStart";
import { saveToPlayersState } from "../../../UtilityFunctions";
import StartTurn from "./StartTurn";
import {FlexBox} from "../../common-components/FlexBox"
import MakeAmoveMenu from "./MakeAmoveMenu"

import { updateLocationOnMap } from "../../../axioscall";

const ActiveUserManager = (props) => {
  const [renderGlobalState, setrenderState] = useRecoilState(renderState);
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );
  const [inTurnLocationState, setinTurnLocationState] = useState({});
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const [diceState, setdiceState] = useState([0, 0, "start-turn"]);
  const [boxState, setBoxState] = useState("flex");

  const [startBlockState, setStartBoxState] = useState(false);
  const [makeAmoveState, setMakeAmoveState] = useState(false);

  const rollDice = async () => {
    setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), "end-turn"]);
    updateLocation();
    saveToPlayersState(
      activeUserDataState,
      playersDataState,
      setPlayersDataState
    );
    props.saveChanges(activeUserDataState);
    setBoxState("flex");
  };

  const updatePlayerMovement = (previousLocation, newLocation) => {
    // active player's avatar
    // field num for the API request
    const newLocationUpdate = { ...newLocation };
    newLocationUpdate[`avatar`] = activeUserDataState.avatar;
    updateLocationOnMap(previousLocation, newLocationUpdate);
  };

  // updates the user's location and saves it on its state
  const updateLocation = async () => {
    const update = { ...activeUserDataState };
    let previousLocation = update.currentLocation;
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
    await updatePlayerMovement(previousLocation, update);
    setrenderState(true);

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
    setBoxState("flex");
  };

  const loadLocationCard = () => {
    if (activeUserDataState.currentLocation) {
      setinTurnLocationState(
        gameboardDataState[activeUserDataState.currentLocation]
      );
    }
  };

  useEffect(() => {
    loadLocationCard();
  },[diceState]);

  if (startBlockState){
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
  }
  else if (makeAmoveState){
    return <MakeAmoveMenu setMakeAmoveState={setMakeAmoveState}>
      

    </MakeAmoveMenu>
  }
  else return (
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
        <FlexBox alignItems="center" flexDirection="row">
          <button onClick={rollDice}>Roll Dice</button>
          <button onClick={() => console.log(setMakeAmoveState(true))}>make an action</button>
        </FlexBox>
      )}
      {diceState[2] === "end-turn" && (

        <FlexBox alignItems="center" flexDirection="row">
          <ActionBox
            setActiveUserState={setActiveUserDataState}
            activeUserState={activeUserDataState}
            inTurnLocationState={inTurnLocationState}
            setinTurnLocationState={setinTurnLocationState}
            boxState={boxState}
            setBoxState={setBoxState}
            endTurn={props.endTurn}
          />
          <button onClick={finishTurn}>end turn</button>
        </FlexBox>
      )}
    </div>
  );
};

export default ActiveUserManager;
