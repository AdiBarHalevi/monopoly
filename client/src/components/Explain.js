import React, { useState } from "react";
import styled from "styled-components";

const Explain = () => {
  const [lineState, setLinestate] = useState("0px");
  const [displayReactMap, setDisplayReactMap] = useState(false);
  const [displayServerMap, setDisplayServerMap] = useState(false);
  const [displayButtons, setDisplayButtons] = useState(false);

  const handleMonopolyClick = () => {
    setLinestate("9rem");
    setDisplayButtons(true);
  };

  const handleclick = (setFunction, state) => {
    setFunction(true);
    // else  setFunction(false)
  };

  return (
    <WelcomePage>
      <Button onClick={handleMonopolyClick}> Monopoly Project</Button>
      {displayButtons && (
        <ConnectionLine width={lineState}>
          <Button
            onClick={() => handleclick(setDisplayReactMap, displayReactMap)}
          >
            {" "}
            React App
          </Button>
          <Button
            onClick={() => handleclick(setDisplayServerMap, displayServerMap)}
          >
            {" "}
            Server Side
          </Button>
        </ConnectionLine>
      )}
      <FlexBox>
        {displayReactMap && (
          <FrontEndChart>
            <table>
              <tbody>
                <tr>
                  <Td>
                    API calls to self generated API with <strong>Axios</strong>
                  </Td>
                </tr>
                <tr>
                  <Td>
                    all styling feature was made with{" "}
                    <strong>Styled components</strong>
                  </Td>
                </tr>
                <tr>
                  <Td>
                    extensive use of <strong>React States</strong> during the
                    game Play
                  </Td>
                </tr>
                <tr>
                  <Td>
                    global state with <strong>Recoil</strong>
                  </Td>
                </tr>
              </tbody>
            </table>
          </FrontEndChart>
        )}
        {displayServerMap && (
          <ServerSideChart>
            <table>
              <tbody>
                <tr>
                  <Td>
                    Generated my own API and stored on Atlas by{" "}
                    <strong>MongoDB</strong>
                  </Td>
                </tr>
                <tr>
                  <Td>Routes and Controllers specific for the API calls</Td>
                </tr>
                <tr>
                  <Td>
                    All code on the Server side was written with{" "}
                    <strong>Node JS</strong>
                  </Td>
                </tr>
              </tbody>
            </table>
          </ServerSideChart>
        )}
      </FlexBox>
    </WelcomePage>
  );
};

export default Explain;

const WelcomePage = styled.div`
  color: #6d8d8a;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #345167;
  height: 92.5vh;
  position: relative;
`;

const Button = styled.div`
  & {
    border: 1px solid black;
    border-radius: 12px;
    padding: 0.5rem;
    color: #345167;
    justify-content: center;
    background-color: #6d8d8a;
  }
`;

const ConnectionLine = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    width: 52%;
    position: relative;
  }

  &:after {
    content: "";
    transition: width 2s;
    background: none;
    border: 1px solid white;
    position: absolute;
    // width: 9rem;
    width: ${(props) => props.width};
    top: 16px;
    left: 6.5rem;
    border-bottom: 1px solid black;
  }
  &:before {
    transition: width 2s;
    content: "";
    background: none;
    border: 1px solid white;
    position: absolute;
    width: ${(props) => props.width};
    top: 16px;
    right: 7.5rem;
    border-bottom: 1px solid black;
  }
  
  @media (max-width: 500px) {
    &:before {
    display:none;
  }
    &:after {
    display:none;
  }
`;

const FrontEndChart = styled.div`
  // margin-left:2.5rem;
`;
const ServerSideChart = styled.div`
  margin-right: 1.5rem;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 12px;
`;

const Td = styled.td`
  height: 1.5rem;
  width: 12rem;
  border-bottom: 1px solid;
  text-align: center;
`;

