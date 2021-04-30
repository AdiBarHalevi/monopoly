import "./App.css";
import axios from "./axioscall";
import Page1 from "./components/page-1/Page1";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const sendreq = async () => {
    let url = "";
    if (process.env.NODE_ENV === "production") {
      url = `https://adi-bootcamp-finalproject.herokuapp.com`;
    } else {
      url = `http://localhost:8000`;
    }
    console.log(url);
    const req = await axios.get(`${url}/test`);
    console.log(req);
  };

  return (
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
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
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
          <Route path="/page2" exact component={Page1} />
          <Route path="/page3" exact component={Page1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
