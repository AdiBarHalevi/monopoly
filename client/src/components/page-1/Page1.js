import React, { useRef } from "react";

const WelcomPage = () => {
  const textInput = useRef()
  const users = []
  const saveUser =()=>{
    users.push(textInput.current.value)
    console.log(users)
  }
  const startGame =()=>{
    localStorage.setItem('users', users)
  }
  return (
  <div className="welcome-page">
    <tr>
        <th>Player's name</th>
        <td><input type="text" ref={textInput}></input></td>
        <td><button onClick={saveUser}>Submit</button></td>
        <td><button onClick={startGame}>startGame</button></td>
      </tr>

  </div>);
};

export default WelcomPage;
