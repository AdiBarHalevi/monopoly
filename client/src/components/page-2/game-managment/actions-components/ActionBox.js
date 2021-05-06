import React from "react";
import styled, { keyframes } from "styled-components";

// components for the game play
import LandedOnAsset from "./landed-on-asset/LandedOnAsset"
import LandedOnChance from "./LandedOnChance"
import LandedOnCommunityChest from "./LandedOnCommunityChest"
import LandedOnTax from "./LandedOnTax"
import GoToJail from "./GotoJail"
import VisitJailOrParking from "./VisitJailOrParking"
import LandedOnStart from "./LandedOnStart"

// functions that save the users list
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../../../atoms";
import {saveToPlayersState} from "../../../../UtilityFunctions"

const ActionBox = (props) => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const { inTurnLocationState,activeUserState } = props;

  const confirm = () => {
    props.setBoxState(["none", false]);
    saveToPlayersState(activeUserState,playersDataState,setPlayersDataState)
  };



  switch (inTurnLocationState.type) {
    case "asset":
      return (<Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <LandedOnAsset
       activeUserState={props.activeUserState}
       setActiveUserState = {props.setActiveUserState}
       confirm={confirm}
       inTurnLocationState={props.inTurnLocationState}
       setinTurnLocationState={props.setinTurnLocationState}
       boxState = {props.boxState}
       />
       
       </Box>)
    case "chance":
      return <Box boxState={props.boxState}><LandedOnChance buy={confirm}/></Box>

    case "comunityChest":
      return <Box boxState={props.boxState}><LandedOnCommunityChest buy={confirm}/></Box>

    case "incomeTax"||"luxurytax":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <LandedOnTax
       activeUserState={props.activeUserState}
       buy={confirm}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

    case "goToJail":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <GoToJail
       activeUserState={props.activeUserState}
       buy={confirm}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

    case "Jail"||"parking":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <VisitJailOrParking
       activeUserState={props.activeUserState}
       buy={confirm}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

    case "start":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <LandedOnStart
       activeUserState={props.activeUserState}
       buy={confirm}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

      default:
        return <></>
  }
};

export default ActionBox;

const showUpAnimation = keyframes`
    0%{
        opacity:0
    }
    100%{
        opacitiy:1

    }
`;
const Box = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${(props)=>props.boxState};
  left: 0;
  animation-name: ${showUpAnimation};
  animation-duration: 0.5s;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;
