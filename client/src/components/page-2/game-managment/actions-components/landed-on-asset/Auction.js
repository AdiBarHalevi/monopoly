import React, { useState } from "react"
import { activeUserData } from "../../../../../atoms";
import SellAssets from "./SellAssets"



const Auction = ()=>{
    const [sellAssetState,setSellAssetState] = useState(false)

    const sellAssets = ()=>{
        setSellAssetState(true)
        console.log(sellAssetState)
    }

    if(!sellAssetState)
        return (
        <div>
                you do no have sufficient funds for this purchase 
                would you like to sell assets or go to an auction
                <button>go to auction</button> <button onClick={sellAssets}>sell assets</button>
        </div>)

    return <SellAssets/>
}

export default Auction