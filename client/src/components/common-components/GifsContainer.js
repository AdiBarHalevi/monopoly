import styled from "styled-components";
import InsufficientFundsGif from "../../img/bankrupcy.gif"
import CountMoneyGif from "../../img/countMoney.gif"

export const InsufficientFundsContainer = styled.div`
  background-image: url(${InsufficientFundsGif});
  background-position: center;
  background-size: cover;
  height:90%;
  width:90%;
  position:absolute;
  opacity:0.8;
`;

export const CountMoneyContainer = styled.div`
  background-image: url(${CountMoneyGif});
  background-position: center;
  background-size: cover;
  height:90%;
  width:90%;
  position:absolute;
  opacity:0.7;
`
export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100%;
`;