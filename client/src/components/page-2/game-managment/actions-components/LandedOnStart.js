import React from "react";
import styled, { keyframes } from "styled-components";
import { GamePlayDataState } from "../../../../atoms";
import { useRecoilState } from "recoil";
import {saveToPlayersState} from "../../../../UtilityFunctions"

const LandedOnStart = (props) => {
  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );
  const {activeUserState,setActiveUserState,setStartBoxState,} =props

  const confirm = ()=>{
    const updateActiveUser = {...activeUserState}
    updateActiveUser["balance"] += 200
    setActiveUserState(updateActiveUser)
    saveToPlayersState(activeUserState,playersDataState,setPlayersDataState)
    setStartBoxState(false)
  }


  return <Box>
    <div>{activeUserState.name} has landed on start</div>
    <div>With the balance of : {activeUserState.balance}</div>
    <button onClick={confirm}>   
        confirm
   </button>
    
    </Box>

};

export default LandedOnStart;


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
