import React, { useState } from "react";
import { getRandomInt } from "../../../UtilityFunctions";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  gameCardsData,
  GamePlayDataState,
  activeUserData,
} from "../../../atoms";

import ActionBox from "./actions-components/ActionBox";
import LandedOnStart from "./actions-components/LandedOnStart";
import { saveToPlayersState } from "../../../UtilityFunctions";
import StartTurn from "./StartTurn";
import { FlexBox } from "../../common-components/FlexBox";
import MakeAmoveMenu from "./MakeAmoveMenu";

import { updateUserReq } from "../../../axioscall";

const ActiveUserManager = (props) => {
  // const setrenderState = useSetRecoilState(shouldLayoutChange);
  const gameboardDataState = useRecoilValue(gameCardsData);
  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );

  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const [inTurnLocationState, setinTurnLocationState] = useState({});

  const [diceState, setdiceState] = useState([0, 0, "start-turn"]);
  const [boxState, setBoxState] = useState("flex");

  const [startBlockState, setStartBoxState] = useState(false);
  const [makeAmoveState, setMakeAmoveState] = useState(false);

  const rollDice = async () => {
    setdiceState([getRandomInt(1, 7), getRandomInt(1, 7), "end-turn"]);
    await updateLocation();
    setBoxState("flex");
  };

  // updates the user's location and saves it on its state
  const updateLocation = async () => {
    const update = { ...activeUserDataState };

    let newLocation = update[`currentLocation`] + diceState[1] + diceState[0];

    if (newLocation < 40) {
      update[`currentLocation`] = newLocation;
    } else {
      update[`currentLocation`] = newLocation - 40;
      setStartBoxState(true);
      
    }

    setActiveUserDataState(update);

    saveToPlayersState(update, playersDataState, setPlayersDataState);

    setinTurnLocationState(gameboardDataState[newLocation]);
    // saves the movment in the API
    await updateUserReq(update);
  };

  // finishes the turn with click of a button saves the next user as active, resets the dice state and saves changes
  const finishTurn = () => {
    saveToPlayersState(
      activeUserDataState,
      playersDataState,
      setPlayersDataState
    );
    props.endTurn();
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

  if (startBlockState) {
    return <LandedOnStart confirm={()=> setStartBoxState(false)} setStartBoxState={setStartBoxState} />;
  } 
  else
   if (makeAmoveState) {
    return (
      <MakeAmoveMenu setMakeAmoveState={setMakeAmoveState}></MakeAmoveMenu>
    );
  } else
    return (
      <div>
        {diceState[2] === "start-turn" && (
          <StartTurn
            diceState={diceState}
            setdiceState={setdiceState}
            loadLocationCard={loadLocationCard}
          />
        )}
        {diceState[2] === "roll-dice" && (
          <FlexBox alignItems="center" flexDirection="row">
            <button onClick={rollDice}>Roll Dice</button>
            <button onClick={() => setMakeAmoveState(true)}>
              make an action
            </button>
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
              setStartBoxState={setStartBoxState}
            />
            <button onClick={finishTurn}>end turn</button>
          </FlexBox>
        )}
      </div>
    );
};

export default ActiveUserManager;
