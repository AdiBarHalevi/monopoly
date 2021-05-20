import styled from "styled-components";

export const ErrorMsg = styled.div`
  height: 100%;
  background: blue;
  width: 100%;
`;

export const PlayerTable = styled.table`
  // border: 1px solid black;
  text-align: center;
`;

export const RegisterPage = styled.div`
  background-color: #345167;
  color: #f0fffe;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 90vh;
`;

export const Avatar = styled.td`
  height: 6rem;
  width: 8rem;
  background-image: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
`;
export const Tr = styled.tr`
  border-bottom: 1px solid white;
`;

export const Td = styled.td`
  height: 6rem;
  width: 8rem;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 1px 5px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #f0fffe;
  background-color: #6d8d8a;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;
`;
