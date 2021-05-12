import styled from "styled-components";

const Avatar = styled.div`
  height: 20px;
  width: 30px;
  background-image: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
`;
export default Avatar;
