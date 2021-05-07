import { useState } from "react";
import { getPaid, retirePlayer } from "../../../../../axioscall";
import { reduceMoney } from "../../../../../UtilityFunctions";
import { AssetCardsContainer } from "../../../../common-components/AssetCardsContainer";

const PayTheRent = (props) => {
  const { activeUserState, inTurnLocationState, setActiveUserState } = props;

  const [bankruptState, setbankruptState] = useState(false);

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
      payTo: inTurnLocationState.property[2],
      amount: activeUserState.balance,
    };
    getPaid(details);
    props.confirm();
  };

  return (
    <AssetCardsContainer>
      {!bankruptState && (
        <div>
          {props.activeUserState.name} has landed on{" "}
          {props.inTurnLocationState.name}
          and its owned by {inTurnLocationState.property[0]}{" "}
          <button onClick={payTheRent}>pay rent</button>
        </div>
      )}

      {bankruptState && (
        <div>
          <div>
            you do not have the funds to pay {inTurnLocationState.property[0]}
          </div>
          <button onClick={declareBankrupcy}>declare bankrupcy</button>
        </div>
      )}
    </AssetCardsContainer>
  );
};

export default PayTheRent;
