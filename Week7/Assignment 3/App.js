import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  sayHello = () => {
    console.log("Hello! Counter was increased.");
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert("Say: " + msg);
  };

  handleSynthetic = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>React Event Examples</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleSynthetic}>Click Me (Synthetic Event)</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;