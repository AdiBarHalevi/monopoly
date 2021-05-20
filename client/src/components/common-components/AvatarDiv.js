import styled from "styled-components";

const Avatar = styled.div`
  height:4rem;
  width: 4rem;
  background-image: url(${(props) => props.avatar});
  // background-color: white;
  background-position: center;
  background-size: cover;
`;
export default Avatar;
