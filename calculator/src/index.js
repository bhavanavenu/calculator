import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 6,
      b: 7,
      symbol: "x"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    let value = event.target.value
    if (!isNaN(Number(value))) 
      value = Number(value)
    let stateKey = event.target.getAttribute("name")
    this.setState({
      [stateKey]: value
    })
  }
  getResult() {
    switch (this.state.symbol) {
      case "+":
        return this.state.a + this.state.b
      case "-":
        return this.state.a - this.state.b
      case "x":
        return this.state.a * this.state.b
      case "/":
        return this.state.a / this.state.b
    }
  }
  render() {
    return (
      <div>
        <h1>IH Calculator</h1>
        <div>
          <input 
            type="number" 
            name="a"
            value={this.state.a} 
            onChange={(e) => this.handleChange(e)}
          />
          <select 
            name="symbol" 
            value={this.state.symbol} 
            onChange={(e) => this.handleChange(e)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
          <input 
            type="number" 
            name="b"
            value={this.state.b}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <h2>Result</h2>
        {this.state.a} {this.state.symbol} {this.state.b} = {this.getResult()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)