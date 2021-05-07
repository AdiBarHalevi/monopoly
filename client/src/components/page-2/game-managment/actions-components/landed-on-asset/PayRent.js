import axiosInstance from "../../../../../axioscall";
import { saveToPlayersState } from "../../../../../UtilityFunctions";
import {AssetCardsContainer} from "../../../../common-components/AssetCardsContainer"

const PayTheRent = (props) => {
  const { activeUserState, inTurnLocationState, setActiveUserState } = props;

  const payTheRent = () => {
    // the case wich there are no houses/hotels yet
    if (!inTurnLocationState.property[3]) {
      const details = {
        payTo: inTurnLocationState.property[2],
        amount: inTurnLocationState.cardDetails.rent,
      };
      getPaid(details);
      reduceMoney();
      props.confirm();
    }
  };

  const reduceMoney = () => {
    const tempActiveUser = { ...activeUserState };
    tempActiveUser[`balance`] -= inTurnLocationState.cardDetails.rent;
    setActiveUserState(tempActiveUser);
  };

  const getPaid = async (details) => {
    try {
      const body = JSON.stringify(details);
      await axiosInstance.put(`/gameAPI/users/getPaid`, {
        body: body,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AssetCardsContainer>
      <div>
        {props.activeUserState.name} has landed on{" "}
        {props.inTurnLocationState.name}
        and its owned by {inTurnLocationState.property[0]}{" "}
      </div>

      <button onClick={payTheRent}>pay rent</button>
      {/* <button onClick={props.confirm}>   
        Confirm
    </button> */}
    </AssetCardsContainer>
  );
};

export default PayTheRent;
