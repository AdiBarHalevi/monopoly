import React from "react";
import { FlexBox } from "../common-components/FlexBox";

import AssetCard from "./AssetsCard";
import ChanceAndCommunityChest from "./ChanceAndCommunityChest";
import CornerCard from "./CornerCard"

import freeParking from "../../img/free_parking.jpg"
import goToJail from "../../img/goto_jail.jpg"
import inJail from "../../img/prison_img.jpg"
import startImg from "../../img/go_box.gif"
import officer from "../../img/officer.png"

const GameBoardLayout = () => {
  return (
    <FlexBox alignItems="center" flexDirection="column">
      <FlexBox>
        {[...Array(11).keys()].map((card) =>{
            if(card===0||card===10) return  card ===0?<CornerCard assetHeight="7.5rem" assetWidth="7.5rem" image={freeParking} />:<CornerCard assetHeight="7.5rem" assetWidth="7.5rem" image ={goToJail}/>
            else return <AssetCard
            assetHeight="7.5rem" assetWidth="2.4rem"
            headerheight= "1.313rem" headerWidth="2.38rem"
            headerDirection="column-reverse" headerRotation="rotate(180deg)"
            abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"/>
        }
        )}
      </FlexBox>
      <FlexBox>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map(() => (
            <AssetCard
             assetHeight="2.4rem" assetWidth="7.5rem"
             headerheight= "2.4rem" headerWidth="1.313rem"
             headerDirection="row-reverse" headerRotation="rotate(90deg)"
             abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"/>
          ))}
        </FlexBox>
        <ChanceAndCommunityChest assetHeight="6rem" assetWidth="8rem"/>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map(() => (
            <AssetCard assetHeight="2.4rem" assetWidth="7.5rem"
              headerheight= "2.4rem" headerWidth="1.313rem"
              headerDirection="row-reverese"  headerRotation="rotate(270deg)"
              abosoluteTopPosition= "1.1rem"  abosoluteLeftPosition="-1rem"
              />
            ))}
        </FlexBox>
      </FlexBox>
      <FlexBox>
        {[...Array(11).keys()].map((card) =>{
            if(card===0||card===10) return card ===0?<CornerCard assetHeight="7.5rem" assetWidth="7.5rem" image={inJail} />:
            <CornerCard assetHeight="7.5rem" assetWidth="7.5rem" image ={startImg}/>
    
            else return <AssetCard assetHeight="7.5rem" assetWidth="2.38rem"
             headerheight= "1.313rem" headerWidth="2.4rem"
             headerDirection="column" headerRotation="0deg"
             abosoluteTopPosition= "0rem"  abosoluteLeftPosition="0rem"/>
             
        }
          )}
      </FlexBox>
    </FlexBox>
  );
};

export default GameBoardLayout;
