import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cardWindowState } from "../../../atoms";
import GameUtilityDisplayCard from "./GameUtilityDisplayCard";

const CardDisplay = () => {
  const [card, setCardWindow] = useRecoilState(cardWindowState);
  if (card.length === 0) return <></>;
  if (card[0].length)
    return (
      <>
        {" "}
        <PicContainer picture={card} />{" "}
      </>
    );
  else if (card[0].rowItems.cardDetails) {
    const {
      cardDetails,
      originalImage,
      headerColor,
      name,
      price,
    } = card[0].rowItems;
    if (!card[0].rowItems.displayImage) {
      const {
        houseCost,
        rent,
        rentWith1house,
        rentWith2house,
        rentWith3house,
        rentWith4house,
        rentWithColorSet,
        rentWithHotel,
      } = cardDetails;
      return (
        <CardsContainer>
          <Container>
            <AreaColor cardColor={headerColor}></AreaColor>
            <CardDetailsFront>{name}</CardDetailsFront>
            <Price>{`$${price}`}</Price>
          </Container>
          <Container>
            <CardDetailsBack>
              <tbody>
                <tr>
                  <th>rent:</th>
                  <td>{rent}</td>
                </tr>
                <tr>
                  <th>with color set</th>
                  <td>{rentWithColorSet}</td>
                </tr>
                <tr>
                  <th>With 1 house</th>
                  <td>{rentWith1house}</td>
                </tr>
                <tr>
                  <th>With 2 houses</th>
                  <td>{rentWith2house}</td>
                </tr>
                <tr>
                  <th>With 3 houses</th>
                  <td>{rentWith3house}</td>
                </tr>
                <tr>
                  <th>With 4 houses</th>
                  <td>{rentWith4house}</td>
                </tr>
                <tr>
                  <th>rent With Hotel</th>
                  <td>{rentWithHotel}</td>
                </tr>
                <tr>
                  <th>house Cost</th>
                  <td>{houseCost}</td>
                </tr>
                <tr>
                  <th>hotel Cost</th>
                  <td>{houseCost}</td>
                </tr>
              </tbody>
            </CardDetailsBack>
          </Container>
        </CardsContainer>
      );
    } else {
      const { rent, with2RR, with3RR, with4RR } = cardDetails;
      return (
        <GameUtilityDisplayCard
          picture={originalImage}
          with2RR={with2RR}
          with3RR={with3RR}
          with4RR={with4RR}
          rent={rent}
          name={name}
        />
      );
    }
  } else
    return (
      <>
        <PicContainer picture={card[0].rowItems.originalImage} />{" "}
      </>
    );
};
export default CardDisplay;

const CardsContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.div`
  border: 1px solid black;
  height: 8rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10px;
`;

const AreaColor = styled.div`
  background: ${(props) => props.cardColor};
  height: 2rem;
`;

const CardDetailsFront = styled.div`
  // height: 3rem;
  text-align: center;
  line-height: 3;
`;

const CardDetailsBack = styled.table`
  line-height: 1.5;
  padding: 2px;
  text-align: left;
  font-size: 7.5px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Price = styled.div`
  text-align: center;
  padding: 1rem;
`;

const PicContainer = styled.div`
  background-image: url(${(props) => props.picture});
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  height: 8rem;
  width: 6rem;
`;
