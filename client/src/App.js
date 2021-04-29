import logo from './logo.svg';
import './App.css';
import axios from "./axioscall"



function App() {
  const sendreq = async()=>{
  let url =""
    if(process.env.NODE_ENV === "production"){url= `https://adi-bootcamp-finalproject.herokuapp.com`}
    else {url= `http://localhost:8000`}
    console.log(url)
    const req = await axios.get(`${url}/test`)
    console.log(req)
  }
  return (
    <div className="App">
      <button onClick={sendreq}>Click me</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
