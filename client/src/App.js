import logo from './logo.svg';
import './App.css';
import axios from "./axioscall"



function App() {
  const sendreq = async()=>{
    const req = await axios.get("http://localhost:8000/test")
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
