import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { activeUserData, gameboardData,renderState } from "../../../atoms";
import styled from "styled-components";
import {
  mortgageAnAssetAPI,
  updatedGameBoardData,
  buyAhouseAPI
} from "../../../axioscall";
import { processData } from "../../../UtilityFunctions";

const InvestOrMortgage = (props) => {
  const [renderGlobalState, setrenderState] = useRecoilState(renderState);

  const [activeUserDataState, setActiveUserDataState] = useRecoilState(
    activeUserData
  );
  const [gameboardDataState, setgameboardData] = useRecoilState(gameboardData);

  const [insufficientFundsState,setInsufficientFundsState] = useState(false)

  const mortgageaAssets = async (asset) => {
    const mortgageValue = gameboardDataState[asset.fieldNum][`price`]*0.6
    const userId = activeUserDataState._id
    await mortgageAnAssetAPI(asset.fieldNum,userId,mortgageValue);
    const newBoard = await updatedGameBoardData();
    setrenderState(true)
  };

  const buyAhouse = async(asset)=>{
    console.log(activeUserDataState.property.length)
    if(activeUserDataState.balance<asset.cardDetails.houseCost) return setInsufficientFundsState(true)
    // assets card, whats in there
    const body ={
      houseCost : asset.cardDetails.houseCost,
      fieldNum:asset.fieldNum,
      numberOfHousesCurrently:asset.property[0].Assets,
      buyerId : activeUserDataState._id,
      playersTurnNumber:activeUserDataState.playersTurnNumber
    }
    await buyAhouseAPI(body)
    const newBoard = await updatedGameBoardData()
    setrenderState(true)
  }

  
  if (activeUserDataState.property)
    if(insufficientFundsState&&activeUserDataState.property.length>0){ return (
    <>
      you have insufficient funds mortgage Assets or declare bankrupcy
    </>
    )}
    if(insufficientFundsState&&activeUserDataState.property.length===0){
      return (<>
        you do not have any more assets nor any cash.
        <button> declare bankrupcy</button>
      </>)
    }
    return (
      <>
        player {activeUserDataState.name} makes a move.<br/>
        your current balance is : ${activeUserDataState.balance}<br/>
        Your Assets:
        <Container>
          {activeUserDataState.property.map((asset, i) => {
            if (gameboardDataState[asset.fieldNum][`isActive`])
              return (
                <CardShow key={i + 20}>
                  <CardHeader
                    color={gameboardDataState[asset.fieldNum][`headerColor`]}
                  ></CardHeader>
                  <h4>{gameboardDataState[asset.fieldNum][`name`]}</h4>
                  <div>
                    mortgage value: $
                    {gameboardDataState[asset.fieldNum][`price`] * 0.6}
                  </div>
                  <Button onClick={() => mortgageaAssets(asset)}>
                    mortgage the asset
                  </Button>
                  {asset.cardDetails.houseCost&&
                  <div> 
                    Assets buildings: 
                    { gameboardDataState[asset.fieldNum][`property`][0][`Assets`]} <br/>
                    house cost: {asset.cardDetails.houseCost}
                    <Button onClick={() => buyAhouse(asset)}>
                      Buy House/Hotel
                    </Button>                  
                  </div>
                  }
                </CardShow>
              );
              else return <></>
          })}
        </Container>
      </>
    );
};

export default InvestOrMortgage
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const CardShow = styled.div`
  padding-buttom: 9px;
  font-size: 10px;
  width: 8rem;
  border: 1px solid;
  background: #d7e6d5;
`;

const CardHeader = styled.div`
  width: 100%;
  font-size: 10px;
  height: 0.8rem;
  background: ${(props) => props.color};
`;

const Button = styled.button`
  font-size: 10px;
`;
