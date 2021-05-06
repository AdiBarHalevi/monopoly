import React, { useState } from "react";

const BuytheAsset = (props) => {

    const confirm = ()=>{
        props.confirm()
        props.setbuytheAssetState(false)
    }


  return (
    <div>
        <div>
            congradulation you now own the asset
        </div>
        <button onClick={confirm}>Confirm</button>
  </div>
  )
};

export default BuytheAsset;