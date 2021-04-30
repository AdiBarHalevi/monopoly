import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;
