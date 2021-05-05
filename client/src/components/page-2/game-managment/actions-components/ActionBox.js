import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LandedOnAsset from "./LandedOnAsset"
import LandedOnChance from "./LandedOnChance"
import LandedOnCommunityChest from "./LandedOnCommunityChest"
import LandedOnTax from "./LandedOnTax"
import GoToJail from "./GotoJail"
import VisitJailOrParking from "./VisitJailOrParking"
import LandedOnStart from "./LandedOnStart"

const ActionBox = (props) => {
  const { inTurnLocationState } = props;

  useEffect(() => {
    turnEffect();
  });

  const rentOrBuy = () => {};

  const turnEffect = () => {

  };

  const buy = () => {
    props.setBoxState(["none", false]);
  };



  switch (inTurnLocationState.type) {
    case "asset":
      return (<Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <LandedOnAsset
       activeUserState={props.activeUserState}
       buy={buy}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>)
    case "chance":
      return <Box boxState={props.boxState}><LandedOnChance buy={buy}/></Box>

    case "comunityChest":
      return <Box boxState={props.boxState}><LandedOnCommunityChest buy={buy}/></Box>

    case "incomeTax"||"luxurytax":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <LandedOnTax
       activeUserState={props.activeUserState}
       buy={buy}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

    case "goToJail":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <GoToJail
       activeUserState={props.activeUserState}
       buy={buy}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

    case "Jail"||"parking":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <VisitJailOrParking
       activeUserState={props.activeUserState}
       buy={buy}
       inTurnLocationState={props.inTurnLocationState}/>
       </Box>

    case "start":
      return <Box boxState={props.boxState}>
      {console.log(props.inTurnLocationState)}
      <LandedOnStart
       activeUserState={props.activeUserState}
       buy={buy}
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
