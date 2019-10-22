import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Working from "./Working";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quotes />
        <Working />
      </div>
    );
  }
}

export default App;