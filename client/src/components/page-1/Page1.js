import React from "react";
import { Link } from "react-router-dom";
import rainingMoney from "../../img/raining-money.gif";
import SignatureEffect from "./SignatureEffect";
import MonopolyIMG from "../../img/MonopolyIMG.png";
import {
  WelcomePage,
  WelcomeSign,
  Paragraph,
  MonopolyLogo,
} from "../common-components/page1-styledcomp";

const WelcomPage = () => {
  return (
    <WelcomePage background={rainingMoney}>
      
        <WelcomeSign>
          <h1>Monopoly Full Stack Project</h1>
          <MonopolyLogo background={MonopolyIMG} /> <SignatureEffect />
          <Paragraph>
            this App is a mock of the game Monopoly.
            <br /> click{" "}
            <Link
              to="/Register"
              style={{
                textDecoration: "none",
                color: "#88CCD9",
                borderBottom: "1px solid",
              }}
            >
              Here
            </Link>{" "}
            to register a new game
          </Paragraph>
        </WelcomeSign>
      
    </WelcomePage>
  );
};

export default WelcomPage;
