import React from "react";
import { FlexBox } from "../common-components/FlexBox";

// assetes Column/Row Parent components
import AssetCardLeftColumn from "./squares/Assets/AssetCardLeftColumn";
import AssetCardRightColumn from "./squares/Assets/AssetCardRightColumn";
import AssetCardTopRow from "./squares/Assets/AssetCarrdTopRow";
import AssetCardButtomRow from "./squares/Assets/AssetsCardsButtomRow";

// Main Compomnents
import ChanceAndCommunityChest from "./ChanceAndCommunityChest";
import CornerCard from "./CornerCard";

// Special Components
import freeParking from "../../img/free_parking.jpg";
import goToJail from "../../img/goto_jail.jpg";
import inJail from "../../img/prison_img.jpg";
import startImg from "../../img/goarrow.png";
import WaterWorks from "./squares/special-squares/WaterWorks";
import BORail from "./squares/special-squares/BORail";
import PARail from "./squares/special-squares/PARail";
import ChanceTop from "./squares/special-squares/Chancetop";
import CommunityChestSquare from "./squares/special-squares/CommunityChestSquare";
import ElectricComp from "./squares/special-squares/ElectricCompany";
import ChanceButtom from "./squares/special-squares/ChanceButtom";
import ReadingRR from "./squares/special-squares/ReadingRR";
import CommunityChestButtom from "./squares/special-squares/CommunityChestButtom";
import IncomeTax from "./squares/special-squares/IncomeTax";
import LuxuryTax from "./squares/special-squares/LuxuryTax";
import ChanceRight from "./squares/special-squares/ChanceRight";
import ShortLineRR from "./squares/special-squares/ShortLineRR";
import CommunityChestRight from "./squares/special-squares/CommunityChestRight";

const GameBoardLayout = () => {
  return (
    <FlexBox alignItems="center" flexDirection="column">
      <FlexBox>
        {[...Array(11).keys()].map((card) => {
          switch (card < 11) {
            case(card === 0):return <CornerCard image={freeParking} key={0}/>
            case(card === 10):return <CornerCard image={goToJail} key={10}/>
            case card === 1: return <AssetCardTopRow headerColor="red" headerTitle="KENTUCKY AVENUE $220" key={1}/>
            case card === 3: return <AssetCardTopRow headerColor="red" headerTitle="INDIANA AVENUE $220" key={3}/>
            case (card === 4) :return (<AssetCardTopRow headerColor="red" headerTitle="ILLINOIS AVENUE $240" key={4}/>);
            case (card === 6):
            return (
              <AssetCardTopRow
                headerColor="yellow"
                headerTitle="ATLANTIC AVENUE $260"
                key={6}
              />
            );
            case (card === 7):
            return (
              <AssetCardTopRow
                headerColor="yellow"
                headerTitle="VENTNOR AVENUE $260"
                key={7}
              />
            );
            case (card === 9):
            return (
              <AssetCardTopRow
                headerColor="yellow"
                headerTitle="MARVIN AVENUE $280"
                key={9}
              />
            );
            case (card === 2): return <ChanceTop key={2}/>;
            case (card === 8): return <WaterWorks key={8} />;
            case(card===5):return <BORail key={5} />;
            default: return null
          }
        })}
      </FlexBox>
      <FlexBox>
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map((card) => {
            switch (card < 9) {
              case card === 0:
                return (
                  <AssetCardLeftColumn key={0}
                    headerColor="orange"
                    headerTitle="NEW-YORK AVENUE $200"
                  />
                )
              case card === 1: 
              return <AssetCardLeftColumn key={1}
              headerColor="orange"
              headerTitle="TENNESSE AVENUE $180"
              />
              case card === 3:           
                return (
                    <AssetCardLeftColumn key={3}
                      headerColor="orange"
                      headerTitle="ST.JAMES PLACE $180"
                    />
                  );
              case card === 2:           
                return <CommunityChestSquare key={2}/>

                case card === 4:           
                return <PARail key={4}/>
              case card ===7:
                return <ElectricComp key={7}/>
              case card === 5:           
                return<AssetCardLeftColumn
                headerColor="#ED008C"
                headerTitle="VIRGINIA AVENUE $160"
                key={5}
              />
              case card === 6:           
                return <AssetCardLeftColumn
                headerColor="#ED008C"
                headerTitle="STATES AVENUE $140"
                key={6}
              />
              case card ===8:
                return <AssetCardLeftColumn
                headerColor="#ED008C"
                headerTitle="ST.CHARELS PLACE $140"
                key={8}
              />
              default: return null
            }
          })}
        </FlexBox>
        <ChanceAndCommunityChest assetHeight="6rem" assetWidth="8rem" />
        <FlexBox flexDirection="column">
          {[...Array(9).keys()].map((card) => {
            switch (card < 10) {
              case(card === 0): return (
                <AssetCardRightColumn
                  headerColor="green"
                  headerTitle="PACIFIC AVENUE $300"
                  key={0}
                />
              );
              case (card === 1):
              return (
                <AssetCardRightColumn
                  headerColor="green"
                  headerTitle="NORTH CAROLINA AVENUE $300"
                  key={1}
                />
              );

              case (card === 3):
              return (
                <AssetCardRightColumn
                  headerColor="green"
                  headerTitle="PENNSILVANIA AVENUE $320"
                  key={3}
                />
              );
              case (card === 6):
                return (
                  <AssetCardRightColumn
                    headerColor="blue"
                    headerTitle="PARK PLACE $350"
                    key={6}
                  />
                );
              case (card === 8):
                return (
                  <AssetCardRightColumn
                    headerColor="blue"
                    headerTitle="BROADWALK $400"
                    key={8}
                  />
                );
              case(card === 7): return <LuxuryTax key={7}/>;     
              case(card === 5): return <ChanceRight key={5}/>;   
              case(card === 4): return <ShortLineRR key={4}/>;
              case(card ===2): return <CommunityChestRight key={2}/>
              default: return null
            }
          })}
        </FlexBox>
      </FlexBox>
      <FlexBox>
        {[...Array(11).keys()].map((card) => {
          switch (card < 11) { 
            case (card===0): return <CornerCard image={inJail} key={0} />
            case (card===10): return <CornerCard image={startImg} key={10}  />
            case (card === 1):
            return (
              <AssetCardButtomRow
                headerColor="#25AAE2"
                headerTitle="CONNETICUT AVENU $120"
                key={1} 
              />
            );
            case card === 3:
            return (
              <AssetCardButtomRow
                headerColor="#25AAE2"
                headerTitle="VERMONT AVENU $100"
                key={3} 
              />
            );
            case (card === 4):
            return (
              <AssetCardButtomRow
                headerColor="#25AAE2"
                headerTitle="ORIENTAL AVENU $100"
                key={4} 
              />
            );
            case (card === 7):
            return (
              <AssetCardButtomRow
                headerColor="#5C3817"
                headerTitle="BALTIC AVENU $60"
                key={7} 

              />
            );
            case (card === 9):
            return (
              <AssetCardButtomRow
                headerColor="#5C3817"
                headerTitle="MEDITERRANEAN AVENUE $60"
                key={9} 

              />
            );
            case (card === 2): return <ChanceButtom key={2} />;
            case (card === 5): return <ReadingRR key={5}/>;
            case (card === 8): return <CommunityChestButtom key={8}/>
            case (card === 6): return <IncomeTax key={6}/>
            default: return null
          }
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default GameBoardLayout;
