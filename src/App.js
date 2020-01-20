import React from "react";
import "./App.css";
import banner from "./LiSEC_eye.jpg";

function handleChange(e) {
  var r = window.confirm("Press OK button to open!");
  if (r === true) {
    window.open("https://www.lisec.com/");
  } else {
    e.preventDefault();
  }
}
function App() {
  return (
    <div className="App">
      <header className ="App-header">
        <img src={banner} className="App-logo" alt="banner" />
        <a
          className="App-link"
          href="/"
          target="_blank"
          onClick={e => handleChange(e)}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
