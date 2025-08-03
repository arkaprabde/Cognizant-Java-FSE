import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: "",
      euros: "",
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euro = (parseFloat(this.state.rupees) / 88).toFixed(2);
    this.setState({ euros: euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR → EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euros && <p>Converted: €{this.state.euros}</p>}
      </div>
    );
  }
}

export default CurrencyConvertor;
