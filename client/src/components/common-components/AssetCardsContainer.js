import styled from "styled-components";

export const AssetCardsContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30rem;
  height: 30rem;
  position: absolute;
  @media (max-width: 500px) {
    width: 10rem;
    height: 10rem;
  }
`;
