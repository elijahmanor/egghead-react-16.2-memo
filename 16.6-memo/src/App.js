import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Greeting = React.memo(({ text }) => {
  console.log("I'm in Greeting");
  return <h3>Hello, {text}!</h3>;
});

class App extends Component {
  state = { isAnimating: true };
  toggleAnimation = () => {
    this.setState(prevState => ({
      isAnimating: !prevState.isAnimating
    }));
  };
  render() {
    const imgStyle = this.state.isAnimating
      ? {}
      : { animationName: "none" };
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            style={imgStyle}
            alt="logo"
          />
          <Greeting text={"React"} />
          <label>
            <input
              type="checkbox"
              onChange={this.toggleAnimation}
              checked={this.state.isAnimating}
            />{" "}
            Animating
          </label>
        </header>
      </div>
    );
  }
}

export default App;
