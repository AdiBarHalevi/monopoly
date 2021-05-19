import React from "react";
import styled from "styled-components";

const GameUtilityDisplayCard = (props) => {
  return (
    <Container>
      <PicContainer picture={props.picture} />
      <CardDetailsBack>
        <tbody>
          <tr>
            <th>{props.name}</th>
          </tr>
          <tr>
            <th>Rent</th>
            <td>{props.rent}</td>
          </tr>
          {props.with2RR && (
            <>
              <tr>
                <th>with 2 Rail Roads</th>
                <td>{props.with2RR}</td>
              </tr>
              <tr>
                <th>with 3 Rail Roads</th>
                <td>{props.with3RR}</td>
              </tr>
              <tr>
                <th>with 4 Rail Roads</th>
                <td>{props.with4RR}</td>
              </tr>
            </>
          )}
        </tbody>
      </CardDetailsBack>
    </Container>
  );
};

export default GameUtilityDisplayCard;

const PicContainer = styled.div`
  background-image: url(${(props) => props.picture});
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  height: 10rem;
  width: 8rem;
`;

const CardDetailsBack = styled.table`
  border: 1px solid black;
  line-height: 1.5;
  padding: 2px;
  text-align: left;
  font-size: 10px;
  background-color: white;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  display: flex;
`;
