import React from "react";
import { FlexBox } from "../common-components/FlexBox";

import AssetCardLeftColumn from "./squares/Assets/AssetCardLeftColumn"
import AssetCardRightColumn from "./squares/Assets/AssetCardRightColumn"
import AssetCardTopRow from "./squares/Assets/AssetCarrdTopRow";
import AssetCardButtomRow from "./squares/Assets/AssetsCardsButtomRow";

import ChanceAndCommunityChest from "./ChanceAndCommunityChest";
import CornerCard from "./CornerCard"

import freeParking from "../../img/free_parking.jpg"
import goToJail from "../../img/goto_jail.jpg"
import inJail from "../../img/prison_img.jpg"
import startImg from "../../img/goarrow.png"


import WaterWorks from "./squares/special-squares/WaterWorks"
import BORail from "./squares/special-squares/BORail"
import ChanceTop from "./squares/special-squares/Chancetop"
import CommunityChestSquare from "./squares/special-squares/CommunityChestSquare"


const GameBoardLayout = () => {
  return (
    <FlexBox alignItems="center" flexDirection="column">
      <FlexBox>
        {[...Array(11).keys()].map((card) =>{
            switch (card<11) {
              case card===0||card===10:
                return card ===0?<CornerCard image={freeParking} />:<CornerCard image ={goToJail}/>;
            
              case (card===1||card===3||card===4):
                return <AssetCardTopRow
                headerColor = "red"
                />;

              case (card===6||card===7||card===9):
                return <AssetCardTopRow
                headerColor = "yellow"
                />

              case(card==2||card===5||card===8):
                  if(card===2)return <ChanceTop/>
                  if(card===8)return <WaterWorks/>
                return <BORail/>
            }
        }
        )}
      </FlexBox>
      <FlexBox>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map((card) => { 
          if(card===0||card===1||card===3) return <AssetCardLeftColumn headerColor="orange"/>
             else if(card===2||card===4||card===7) return <CommunityChestSquare headerColor="none"/>
             else return <AssetCardLeftColumn headerColor="#ED008C"/>
          })}
        </FlexBox>
        <ChanceAndCommunityChest assetHeight="6rem" assetWidth="8rem"/>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map((card) => {
            if(card===0||card===1||card===3) return <AssetCardRightColumn headerColor = "green"/>

            else if(card===6||card===8) return <AssetCardRightColumn headerColor = "blue" />

            else return <AssetCardRightColumn headerColor = "none"/>
            })}
        </FlexBox>
      </FlexBox>
      <FlexBox>
        {[...Array(11).keys()].map((card) =>{
            if(card===0||card===10) return card ===0?<CornerCard image={inJail} />:
            <CornerCard image ={startImg}/>
            else if(card===1||card===3||card===4) return <AssetCardButtomRow headerColor = "#25AAE2"/>
            else if(card===7||card===9) return <AssetCardButtomRow headerColor = "#5C3817"/>
            else return <AssetCardButtomRow />
        }
          )}
      </FlexBox>
    </FlexBox>
  );
};

export default GameBoardLayout;
