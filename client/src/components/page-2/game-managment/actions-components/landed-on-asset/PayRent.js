import { useEffect, useState } from "react";
import { getPaid, retirePlayer } from "../../../../../axioscall";
import { reduceMoney } from "../../../../../UtilityFunctions";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";
import { useRecoilState } from "recoil";
import { GamePlayDataState } from "../../../../../atoms";

const PayTheRent = (props) => {
  const { activeUserState, inTurnLocationState, setActiveUserState } = props;
  const [bankruptState, setbankruptState] = useState(false);
  const [ownerState, setOwnerState] = useState("");
  const [rentState, setRentState] = useState(0);

  const [playersDataState, setPlayersDataState] = useRecoilState(
    GamePlayDataState
  );

  const findAssetOwner = () => {
    try {
      const owner = playersDataState.find((player) =>
        player.playersTurnNumber ===
        parseInt(inTurnLocationState.property[0].ownedby)
          ? player
          : ""
      );
      setOwnerState(owner);
    } catch (e) {
      console.log(e);
    }
  };

  const setRent = () => {
    switch (inTurnLocationState.property[0].Assets) {
      case "none":
        setRentState(inTurnLocationState.cardDetails.rent);
        break;
      case "ownscolorSet":
        setRentState(inTurnLocationState.cardDetails.rentWithColorSet);
        break;
      case "1house":
        setRentState(inTurnLocationState.cardDetails.rentWith1house);
        break;
      case "2house":
        setRentState(inTurnLocationState.cardDetails.rentWith2house);
        break;
      case "3house":
        setRentState(inTurnLocationState.cardDetails.rentWith3house);
        break;
      case "4house":
        setRentState(inTurnLocationState.cardDetails.rentWithHotel);
        break;
      case "2RR":
        setRentState(inTurnLocationState.cardDetails.with2RR);
        break;
      case "3RR":
        setRentState(inTurnLocationState.cardDetails.with3RR);
        break;
      case "4RR":
        setRentState(inTurnLocationState.cardDetails.with4RR);
        break;
      case "allfacility":
        setRentState(inTurnLocationState.cardDetails.allfacility);
        break;
      default:
        setRentState(0);
        break;
      
    }
  };

  const payTheRent = () => {
    if (activeUserState.balance - inTurnLocationState.cardDetails.rent < 0) {
      return setbankruptState(true);
    }
    // the case wich there are no houses/hotels yet
    if (!inTurnLocationState.property[3]) {
      const details = {
        payTo: inTurnLocationState.property[2],
        amount: inTurnLocationState.cardDetails.rent,
      };
      getPaid(details);
      // reduceMoney params = (activeUserState,setActiveUserState,amount)
      reduceMoney(
        activeUserState,
        setActiveUserState,
        inTurnLocationState.cardDetails.rent
      );
      props.confirm();
    }
  };

  const declareBankrupcy = () => {
    retirePlayer(activeUserState._id);
    const details = {
      payTo: inTurnLocationState.property[0].ownedby,
      amount: activeUserState.balance,
    };
    getPaid(details);
    setbankruptState(false);
    props.confirm();
  };

  useEffect(() => {
    setRent();
    findAssetOwner();
  }, []);

  return (
    <AssetCardsContainer>
      {!bankruptState && (
        <div>
          <div>
            {activeUserState.name} has landed on {inTurnLocationState.name}
          </div>

          <div>this asset is owned by {ownerState && ownerState.name}</div>
          <div>
            {activeUserState.name} has to pay rent of ${rentState}
          </div>
          <button onClick={payTheRent}>pay rent</button>
        </div>
      )}

      {bankruptState && (
        <div>
          <div>
            you do not have the funds to pay rent to{" "}
            {ownerState && ownerState.name}
          </div>
          <button onClick={declareBankrupcy}>declare bankrupcy</button>
        </div>
      )}
    </AssetCardsContainer>
  );
};

export default PayTheRent;
