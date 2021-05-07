import styled, { keyframes } from "styled-components";

const showUpAnimation = keyframes`
    0%{
        opacity:0
    }
    100%{
        opacitiy:1

    }
`;

export const ActionBoxContainer = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${(props) => props.boxState};
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  animation-name: ${showUpAnimation};
  animation-duration: 0.5s;
  justify-content: center;
  align-items: center;
`;
