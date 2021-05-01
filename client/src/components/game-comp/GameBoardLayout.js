import React from "react";
import { FlexBox } from "../common-components/FlexBox";

import AssetCard from "./AssetsCard";
import ChanceAndCommunityChest from "./ChanceAndCommunityChest";
import CornerCard from "./CornerCard"

import freeParking from "../../img/free_parking.jpg"
import goToJail from "../../img/goto_jail.jpg"
import inJail from "../../img/prison_img.jpg"
import startImg from "../../img/goarrow.png"

const GameBoardLayout = () => {
  return (
    <FlexBox alignItems="center" flexDirection="column">
      <FlexBox>
        {[...Array(11).keys()].map((card) =>{
            if(card===0||card===10) return  card ===0?<CornerCard image={freeParking} />:<CornerCard image ={goToJail}/>
            else if(card===1||card===3||card===4) return <AssetCard
                assetHeight="3.5rem" assetWidth="1.77rem"
                headerheight= "1.313rem" headerWidth="1.77rem"
                headerDirection="column-reverse" headerRotation="rotate(180deg)"
                headerColor = "red"
                abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"/>
            else if(card===6||card===7||card===9) return <AssetCard
              assetHeight="3.5rem" assetWidth="1.77rem"
              headerheight= "1.313rem" headerWidth="1.77rem"
              headerDirection="column-reverse" headerRotation="rotate(180deg)"
              headerColor = "yellow"
              abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"/>
            else return <AssetCard
              assetHeight="3.5rem" assetWidth="1.77rem"
              headerheight= "1.313rem" headerWidth="1.77rem"
              headerDirection="column-reverse" headerRotation="rotate(180deg)"
              headerColor = "none"
              abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"/>
        }
        )}
      </FlexBox>
      <FlexBox>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map((card) => { 
          if(card===0||card===1||card===3) return <AssetCard
             assetHeight="1.77rem" assetWidth="3.5rem"
             headerheight= "1.77rem" headerWidth="1.313rem"
             headerDirection="row-reverse" headerRotation="rotate(90deg)"
             abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
             headerColor = "orange"/>
             else if(card===2||card===4||card===7) return <AssetCard
             assetHeight="1.77rem" assetWidth="3.5rem"
             headerheight= "1.77rem" headerWidth="1.313rem"
             headerDirection="row-reverse" headerRotation="rotate(90deg)"
             abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
             headerColor = "none"/>
             else return <AssetCard
             assetHeight="1.77rem" assetWidth="3.5rem"
             headerheight= "1.77rem" headerWidth="1.313rem"
             headerDirection="row-reverse" headerRotation="rotate(90deg)"
             abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
             headerColor = "#ED008C"/>
          })}
        </FlexBox>
        <ChanceAndCommunityChest assetHeight="6rem" assetWidth="8rem"/>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map((card) => {
            if(card===0||card===1||card===3) return <AssetCard assetHeight="1.77rem" assetWidth="3.5rem"
              headerheight= "1.77rem" headerWidth="1.313rem"
              headerDirection="row-reverese"  headerRotation="rotate(270deg)"
              abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
              headerColor = "green"
              />
            else if(card===6||card===8) return <AssetCard assetHeight="1.77rem" assetWidth="3.5rem"
            headerheight= "1.77rem" headerWidth="1.313rem"
            headerDirection="row-reverese"  headerRotation="rotate(270deg)"
            abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
            headerColor = "blue" />

            else return <AssetCard assetHeight="1.77rem" assetWidth="3.5rem"
            headerheight= "1.77rem" headerWidth="1.313rem"
            headerDirection="row-reverese"  headerRotation="rotate(270deg)"
            abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
            headerColor = "none" />
            })}
        </FlexBox>
      </FlexBox>
      <FlexBox>
        {[...Array(11).keys()].map((card) =>{
            if(card===0||card===10) return card ===0?<CornerCard image={inJail} />:
            <CornerCard image ={startImg}/>
            else if(card===1||card===3||card===4) return <AssetCard assetHeight="3.5rem" assetWidth="1.77rem"
            headerheight= "1.313rem" headerWidth="1.77rem"
            headerDirection="column" headerRotation="0deg"
            abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"
            headerColor = "#25AAE2"/>
            else if(card===7||card===9) return <AssetCard assetHeight="3.5rem" assetWidth="1.77rem"
            headerheight= "1.313rem" headerWidth="1.77rem"
            headerDirection="column" headerRotation="0deg"
            abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"
            headerColor = "#5C3817"/>
            else return <AssetCard assetHeight="3.5rem" assetWidth="1.77rem"
             headerheight= "1.313rem" headerWidth="1.77rem"
             headerDirection="column" headerRotation="0deg"
             abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"/>
             
        }
          )}
      </FlexBox>
    </FlexBox>
  );
};

export default GameBoardLayout;
