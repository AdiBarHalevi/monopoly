import styled from "styled-components";

const Avatar = styled.div`
  height: 2rem;
  width: 2rem;
  background-image: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
`;
export default Avatar;
