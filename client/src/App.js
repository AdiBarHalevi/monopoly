import "./App.css";
import Page1 from "./components/page-1/Page1";
import Page2 from "./components/page-2/Page2";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <header className="app-header">
            <div>
              <Link to="/" style={{ textDecoration: "none" }}>
                Contact Me
              </Link>
            </div>
            <ul>
              <li>
                <Link to="/play" style={{ textDecoration: "none" }}>
                  Play
                </Link>
              </li>
              <li>
                <Link to="/tutorial" style={{ textDecoration: "none" }}>
                  Tutorial
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/play" exact component={Page2} />
            <Route path="/page3" exact component={Page1} />
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
