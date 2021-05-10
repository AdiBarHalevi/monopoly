import React, { useState } from "react"
import { activeUserData } from "../../../../../atoms";
import SellAssets from "./SellAssets"



const InsufficientFunds = (props)=>{
    const [sellAssetState,setSellAssetState] = useState(false)

    const changeSellAssetState = ()=>{
        setSellAssetState(true)
        console.log(sellAssetState)
    }

    if(!sellAssetState)
        return (
        <div>
                you do no have sufficient funds for this purchase 
                would you like to sell assets or go to an auction
                <button>go to auction</button> <button onClick={changeSellAssetState}>sell assets</button>
        </div>)

    return <SellAssets confirm={props.confirm} setSellAssetState={setSellAssetState} endTurn = {props.endTurn}/>
}

export default InsufficientFunds