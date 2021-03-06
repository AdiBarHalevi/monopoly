import styled from "styled-components";

export const WelcomePage = styled.div`
  color: #f0fffe;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #345167;
  height: 92.5vh;
  position: relative;
  &:before {
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${(props) => props.background});
    opacity: 0.05;
    background-position: center;
    background-size: cover;
  }
`;

export const WelcomeSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
export const Paragraph = styled.p`
  width: 29rem;
  text-align: center;
  z-index: 1;
  @media (max-width: 500px) {
    width: 60%;
    text-align: center;
  }
`;

export const MonopolyLogo = styled.div`
  background-image: url(${(props) => props.background});
  height: 3rem;
  width: 10rem;
  background-position: center;
  background-size: cover;
  display: inline-block;
`;
