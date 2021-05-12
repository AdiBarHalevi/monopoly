import "./App.css";
import Page1 from "./components/page-1/Page1";
import Page2 from "./components/page-2/Page2";
import Explain from "./components/Explain"
import Register from "./components/Register"
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <HeaderContainer>
            <Ul>
              <li>
              <Link to="/" style={{ textDecoration: "none",color: "#6d8d8a"  }}>
                  Home
              </Link>
              </li>
              <li>
                <Link to="/play" style={{ textDecoration: "none",color: "#6d8d8a"  }}>
                  Play
                </Link>
              </li>
            </Ul>
            <div>
              <Link to="/explain" style={{ textDecoration: "none",color: "#6d8d8a" }}>
                  About the APP
                </Link>
            </div>
          </HeaderContainer>
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/play" exact component={Page2} />
            <Route path="/explain" exact component={Explain} />
            <Route path="/Register" exact component={Register} />
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #655057;
  color: #6d8d8a;
  padding:0 2rem 0 0;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 6.5rem;
`
